'use strict';

const Post = require('../../models').Post
const Category = require('../../models').Category

class CategoryService {

    async all(){
        return Category.findAll()
        .then(categories => {
            return categories
        })
    }

    async allCategoryPosts() {
        return Category.findAll({
            include: [{
                model: Post
            }]
        }).then(posts => {
            return posts
        })
    }

    async allPostsByCategory(categoryId) {
        return Category.findById(categoryId, {
            include: [{
                model: Post
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
        return Category.create(req.body)
        .then(result => {
           return true
        })
        .catch(err => {
            throw new Error
        })
    }
}

module.exports = CategoryService