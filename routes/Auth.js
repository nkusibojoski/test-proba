'use strict';

const Router = require('express')
const authRouter = Router()


const passport = require("passport");
const AuthController = require('../controllers/AuthController')


authRouter.get('/login',(req, res)=>{
    return new AuthController().login(req, res)
})

authRouter.post('/login', passport.authenticate('local-login',{
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
    failureFlash : true
}))

authRouter.get('/logout',(req, res) =>{
    return new AuthController().logout(req, res)
})

module.exports = authRouter 
