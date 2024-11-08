import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category';
import { categories } from '../data.js';

export default class CategoriesController {

    public async all({ response }: HttpContext) {
        const categories = await Category.all();
        return response.ok(categories);
    }

    async addCategories({ response }: HttpContext) {
        const category = await Category.createMany(categories);
        return response.ok(category);
    }
}