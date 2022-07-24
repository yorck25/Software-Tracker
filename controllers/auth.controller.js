const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { set } = require("mongoose");
console.log("working_1");
exports.signup = (req, res) => {
    console.log("working");
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    });
    console.log(user)
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } else {
            user.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                res.render('register', { title: "Registrieren", message: "Benutzer erfolgreich registriert - jetzt einloggen" });
            });
        }
    });
};
exports.signin = (req, res) => {
    console.log("working_2")
    User.findOne({
        username: req.body.username
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.render('login', { message: "Benutzer nicht gefunden" });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Falsches Passwort"
                });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });
            res.cookie('x-access-token', token)
            res.redirect('/software')
        });
};
exports.logout = (req, res) => {
    res.clearCookie('x-access-token')
    res.redirect('/')
}