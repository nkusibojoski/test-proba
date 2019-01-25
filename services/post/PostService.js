'use strict';

const Post = require('../../models').Post
const Category = require('../../models').Category


class PostService {
   
    async all() {
        return Post.findAll({
            include: [{
                model: Category
            }]
        })
        .then(posts => {
            return posts
        })
        .catch(err => {
            throw new Error
        })
    }

    async store(req, res) {
        return Post.create(req.body)
        .then(result => {
           return true
        })
        .catch(err => {
            throw new Error
        })
    }
}

module.exports = PostService