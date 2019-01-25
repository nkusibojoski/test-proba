'use strict';

const Router = require('express')
const postRouter = Router()

const PostController = require('../controllers/PostController')
const authenticated = require('../middlewares/authMiddleware')
const { validationResult, check } = require('express-validator/check')
const validate = require('../validators/CreatePostValidator')
const handle = require('../validators/ValidationErrorsHandler')

postRouter.get('/all', (req, res) => {
    return new PostController().index(req, res)
})

postRouter.get('/create', authenticated, (req, res) => {
    return new PostController().create(req, res)
})

postRouter.post('/store', authenticated, validate(), (req, res, next) => {
    handle(req, res, next)
    return new PostController().store(req, res)
})

module.exports = postRouter 
