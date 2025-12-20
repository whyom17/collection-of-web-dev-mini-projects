const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const userModel = require('./models/user.js');
const authMiddleware = require('./middleware/auth.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('create');
});

app.get('/profile', authMiddleware, (req, res) => {
    const user = userModel.findOne({email: req.user.email}).then((user) => {
        res.render('profile', { username: user.username });
    });
});

app.post('/create', async (req, res) => {
    const { username, password, email, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) throw err;
        
            let createdUser = await userModel.create({
                username,
                password: hash,
                email,
                age
            });

            createdUser.save().then(() => {
                res.status(201).redirect('/profile');
            }).catch((err) => {
                res.status(500).send('Error creating user');
            });

            // Generate JWT token
            let token = jwt.sign({email}, 'secretkey');
            res.cookie('token', token);

        });
    });
}); 

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    let user =await userModel.findOne({email});

    if(!user){
        return res.status(400).send('User not found');
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({email}, 'secretkey');
            res.cookie('token', token);
            res.redirect('/profile/' + user.username);
        }
        else {
            res.status(400).send('Invalid Credentials');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});