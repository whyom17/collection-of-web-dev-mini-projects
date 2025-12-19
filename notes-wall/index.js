const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// app.use(express.static('public'));  // serve static files(images, js, css) from 'public' folder 
// Express serves static files from a folder named "public" relative to the directory from which you run node, not necessarily the file where your code lives.
app.use(express.static(path.join(__dirname,'public')));  // more robust way to serve static files

app.set('view engine', 'ejs');  // backend will render ejs files


app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render('index', {
            files: files,
            fileContents: files.map(file => {
                return fs.readFileSync(`./files/${file}`, 'utf-8');
            })
        });
    });
});
app.post('/create', (req, res) => {
    const text = req.body.noteText.trim();
    const color = req.body.noteColor;

    fs.writeFile(`./files/note.${Date.now()}.${color}.txt`, text, (err) => {
        if (err) {
            console.error('Error saving note:', err);
            return;
        }
        console.log('Note saved successfully!');
        res.redirect('/');
    });


});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});