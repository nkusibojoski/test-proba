'use strict';

const { check, validationResult } = require('express-validator/check');

     function validate(req, res, next) {
        return [
            check('title', 'Title is required').exists().not().isEmpty(),
            check('content', 'Content is required').exists().not().isEmpty(),
            check('categoryId', 'Category is required').exists().not().isEmpty(),
        ]
    }


module.exports = validate