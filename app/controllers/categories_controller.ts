import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category';

export default class CategoriesController {

    public async all({ response }: HttpContext) {
        const categories = await Category.all();
        return response.ok(categories);
    }
}