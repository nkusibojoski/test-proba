'use strict';

const PostService = require('../services/post/PostService')
const CategoryService = require('../services/category/CategoryService')

class PostController {

    async create(req, res) {
        const heading = "Create new post"
        const category = new CategoryService();
        const categories = await category.all();
        res.render('admin/createPost', { categories, heading })
    }

    async store(req, res) {
        const post = new PostService();
        try {
            await post.store(req, res)
            req.flash('success', 'Successfully created post');
            res.redirect('/dashboard')
        } catch (error) {
            res.redirect('/')
        }
    }
}
module.exports = PostController