'use strict';

class AuthController {

    login(req, res) {
        res.render('login', { layout: false, alerts: req.flash() })
    }

    logout(req, res) {
        req.logout()
        res.redirect('/')
    }
}

module.exports = AuthController