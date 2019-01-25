'use strict';

const { check, validationResult } = require('express-validator/check');

     function validate(req, res, next) {
        return [
            check('name', 'Name is required and should not be empty').exists().not().isEmpty()
        ]
    }


module.exports = validate