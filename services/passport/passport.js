'use strict';

const bCrypt = require('bcrypt-nodejs');
const User = require('../../models').User
const passport = require('passport');


const generateHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8));
};

const isValidPassword = function (userPassword, password) {
    return bCrypt.compareSync(password, userPassword);
}

module.exports = function () {

    const LocalStrategy = require('passport-local').Strategy

    passport.use('local-login', new LocalStrategy(
        {
            usernameField: 'username',
            passportField: 'password',
            passReqToCallback: true,
        },
        function (req, username, password, done) {
            User.findOne({
                where: {
                    username
                }
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'Username doesnt exists.' })
                }
                if (!isValidPassword(user.password, password)){
                    return done(null, false, { message: 'Wrong password. Try again.'})
                }
                return done( null, user)
            })
        }
    ))

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });
}