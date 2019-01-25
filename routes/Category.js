'use strict';

const Router = require('express')
const categoryRouter = Router()

const CategoryController = require('../controllers/CategoryController')
const authenticated = require('../middlewares/authMiddleware')

const { validationResult,check } = require('express-validator/check');
const validate = require('../validators/CreateCategoryValidator')
const handle = require('../validators/ValidationErrorsHandler')

categoryRouter.get('/create', authenticated, (req, res)=>{
    return new CategoryController().create(req, res)
})

categoryRouter.post('/store', authenticated, validate(), (req, res, next)=>{
    handle(req, res, next)
    return new CategoryController().store(req, res)
})

categoryRouter.get('/:id', (req, res)=>{
    return new CategoryController().postsByCategory(req, res)
})

module.exports = categoryRouter 
