const db = require("../models");
const ROLES = db.ROLES;
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

        User.findOne({
            mail: req.body.mail
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.render('register', { title: 'Registrieren', message: "E-Mail bereits registriert" })
                return;
            }


            next();
        });
    });
};

checkRoleExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.render('register', { title: 'Registrieren', message: `Fehler! Nutzerrolle ${req.body.roles[i]} existiert nicht!`})
                return;
            }
        }
    }
}

checkCode = (req, res, next) => {
    if (req.body.code === "1234") {
        next();
    } else {
        res.render('register', { title: 'Registrieren', message: 'Falscher authentifizierung code'})
    }
}

const verifySignUp = {
    checkDuplicateUsername,
    checkRoleExisted,
    checkCode,
};
module.exports = verifySignUp;