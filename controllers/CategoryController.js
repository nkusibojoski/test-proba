'use strict';

const PostService = require('../services/post/PostService')
const CategoryService = require('../services/category/CategoryService')

class CategoryController {

    async create(req, res) {
        const heading = "Create new category"
        res.render('admin/createCategory', { heading })
    }

    async store(req, res) {
        const category = new CategoryService();
        try {
            await category.store(req, res)
            req.flash('success', 'Successfully created category');
            res.redirect('/dashboard')
        } catch (error) {
            res.redirect('/')
        }
    }

    async postsByCategory(req, res) {
        try {
            const categoryId = req.params.id;
            if (isNaN(categoryId)) {
                res.redirect('/')
            }
            const category = new CategoryService();
            const categories = await category.all();
            const categoryWithPosts = await category.allPostsByCategory(categoryId)
            const heading = categoryWithPosts.name
            res.render('postsByCategory', { categoryWithPosts, categories, heading })
        }
        catch (error) {
            res.redirect('/')
        }

    }
}

module.exports = CategoryController