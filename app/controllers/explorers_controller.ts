import Deck from '#models/deck';
import type { HttpContext } from '@adonisjs/core/http'

export default class ExplorersController {

    async all({ params, response }: HttpContext) {
        const { categoryId } = params;
        const query = Deck.query()
            .where('isPublic', true)
            .preload('category')
            .preload('cards');
        if (categoryId) {
            query.where('categoryId', categoryId);
        }
        const decks = await query;

        const decksWithOwner = decks.map(deck => ({
            id: deck.id,
            name: deck.title,
            cardCount: deck.cards.length,
            categoryId: deck.categoryId,
            iconCategoryName: deck.category.iconName,
            iconCategoryFamily: deck.category.iconLibrary,
        }));

        return response.ok(decksWithOwner);
    }
}
