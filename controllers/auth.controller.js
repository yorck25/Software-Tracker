const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { set } = require("mongoose");

console.log("working_1");
exports.signup = (req, res) => {
    console.log("working");
    const user = new User({
        username: req.body.username,
        mail: req.body.mail,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password)
    });
    console.log(user)
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        } 
        
        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles }
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    user.roles = roles.map(role => role._id);
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.render('login', { title: "Login", message: "Benutzer erfolgreich registriert - jetzt einloggen" });
                    });
                }
            );
        } else {
            Role.findOne({ name: "user"}, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = [role._id];
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.render('login', { title: "Login", message: "Benutzer erfolgreich registriert - jetzt einloggen" });
                })
            });
        }
    });
};

exports.signin = (req, res) => {
    console.log("working_2")   
    
    User.findOne({
        username: req.body.username
    })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.render('login', { title: "Login", message: "Benutzer nicht gefunden" });
            } 
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                res.render('login', { title: 'Login', message: "Falsches Passwort"})
                return 
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }

            res.cookie('x-access-token', token)
            res.redirect('/software')
        });
};
exports.logout = (req, res) => {
    res.clearCookie('x-access-token')
    res.redirect('/')
}