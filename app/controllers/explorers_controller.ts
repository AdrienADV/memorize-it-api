import Deck from '#models/deck';
import { getDeckPublicDeckValidator } from '#validators/deck';
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

    async decksDetails({ params, response }: HttpContext) {
        const { id } = await getDeckPublicDeckValidator.validate(params);
        const deck = await Deck.query()
            .where('id', id)
            .preload('category')
            .preload('cards')
            .first()

        if (!deck) {
            return response.notFound({
                message: 'Deck not found',
            });
        }

        return response.ok({
            id: deck.id,
            name: deck.title,
            cardCount: deck.cards.length,
            category: deck.category,
            iconCategoryName: deck.category.iconName,
            iconCategoryFamily: deck.category.iconLibrary,
            cards: deck.cards.map(card => ({
                id: card.id,
                question: card.question,
                answer: card.answer,
            })),
        });
    }
}
