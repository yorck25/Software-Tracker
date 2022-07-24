const db = require("../models");
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
    console.log("working_3")
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.render('register', { title: 'Registrieren', message: "Benutzer bereits registriert" })
            return;
        }
        next();
    });
};

checkCode = (req, res, next) => {
    if (req.body.code === "1234") {
        next();
    } else {
        res.render('register', { title: 'Registrieren', message: 'Falscher authentifizierung code'})
    }
}

const verifySignUp = {
    checkDuplicateUsername,
    checkCode,
};
module.exports = verifySignUp;