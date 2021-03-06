'use strict';

const { validationResult } = require('express-validator/check');

function handle(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    return next;
}


module.exports = handle
