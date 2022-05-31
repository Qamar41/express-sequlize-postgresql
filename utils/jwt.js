const jwt = require("jsonwebtoken");

const JWT_SECRET = 'secret';

const verifyToken = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) reject(err);

        resolve(decoded.user);
    });
});

const signToken = (user, expiresIn) => new Promise((resolve, reject) => {
    jwt.sign({ user }, JWT_SECRET, { expiresIn }, (err, token) => {
        if (err) reject(err);

        resolve(token);
    });
});

module.exports =  { signToken, verifyToken };