const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).send('Access Denied.');
    }
    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = authMiddleware;