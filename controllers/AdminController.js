'use strict';

const PostService = require('../services/post/PostService')
const CategoryService = require('../services/category/CategoryService')

class AdminController {

    async index(req, res) {
        const heading = "Welcome to Admin Panel"
        const post = new PostService();
        const posts = await post.all();
        const category = new CategoryService();
        const categories = await category.all();
        res.render('admin/dashboard', { posts, categories, heading, alerts: req.flash() });
    }

}

module.exports = AdminController