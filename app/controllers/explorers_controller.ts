import Deck from '#models/deck';
import { getDeckPublicDeckValidator } from '#validators/deck';
import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js';
import User from '#models/user';

export default class ExplorersController {

    async all({ auth, params, response }: HttpContext) {
        assert(auth.user, 'Kindly Login');
        const { categoryId } = params;
        const query = Deck.query()
            .where('isPublic', true)
            .preload('category')
            .preload('cards');
        if (categoryId) {
            query.where('categoryId', categoryId);
        }
        const decks = await query;

        const user = await User.query().where('id', auth.user.id).preload('decks').first();

        const decksWithOwner = decks.map(deck => {
            const isAlreadyBuy = user?.decks.some(userDeck => userDeck.id === deck.id) || false;
            return {
                id: deck.id,
                name: deck.title,
                cardCount: deck.cards.length,
                categoryId: deck.categoryId,
                isAlreadyBuy,
                price: deck.priceId,
                iconCategoryName: deck.category.iconName,
                iconCategoryFamily: deck.category.iconLibrary,
            };
        });

        return response.ok(decksWithOwner);
    }

    async decksDetails({ auth, params, response }: HttpContext) {
        assert(auth.user, 'Unauthorized');
        const { id } = await getDeckPublicDeckValidator.validate(params);
        const deck = await Deck.query()
            .where('id', id)
            .preload('category')
            .preload('cards')
            .first()

        const user = await User.query().where('id', auth.user.id).preload('decks').first();

        if (!deck) {
            return response.notFound({
                message: 'Deck not found',
            });
        }

        const isAlreadyBuy = user?.decks.some(userDeck => userDeck.id === deck.id) || false;

        return response.ok({
            id: deck.id,
            name: deck.title,
            cardCount: deck.cards.length,
            isAlreadyBuy,
            category: deck.category,
            description: deck.description,
            price: deck.priceId,
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
