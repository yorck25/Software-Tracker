const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
verifyToken = (req, res, next) => {
    let token = req.cookies["x-access-token"];
    if (!token) {
        return res.redirect('login')
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Nicht autorisiert" });
        }
        req.userId = decoded.id;
        next();
    });
};
const authJwt = {
    verifyToken,
};
module.exports = authJwt;