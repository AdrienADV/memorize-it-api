import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category';

export default class CategoriesController {

    public async all({ response }: HttpContext) {
        const categories = await Category.query().select('id', 'name')
        const formatCategory = categories.map(category => ({
            value: category.id,
            label: category.name
        }))
        return response.ok(formatCategory);
    }
}