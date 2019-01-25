'use strict';

const Router = require('express')
const indexRouter = Router()

const authenticated = require('../middlewares/authMiddleware')
const IndexController = require('../controllers/IndexController')
const AdminController = require('../controllers/AdminController')

indexRouter.get('/',(req, res)=>{
    return new IndexController().index(req, res)
})

indexRouter.get('/dashboard', authenticated, (req, res)=>{
    return new AdminController().index(req, res)
})


module.exports = indexRouter 
