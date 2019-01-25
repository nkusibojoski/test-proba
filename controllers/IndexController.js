'use strict';

const PostService = require('../services/post/PostService')
const CategoryService = require('../services/category/CategoryService')

class IndexController {

    async index(req, res) {
        const heading = "Welcome to blog posts"
        const post = new PostService();
        const posts = await post.all();
        const category = new CategoryService();
        const categories = await category.all()
        res.render('index', { posts, categories, heading })
    }
}

module.exports = IndexController