import Deck from '#models/deck';
import type { HttpContext } from '@adonisjs/core/http'

export default class ExplorersController {

    public async allPublicDecks({ response }: HttpContext) {
        const allPublicDeck = await Deck.query().where('isPublic', true).select('id', 'title', 'priceId', 'categoryId').preload('category').preload('cards')
        const formatDecks = allPublicDeck.map(deck => ({
            id: deck.id,
            title: deck.title,
            numberOfCards: deck.cards.length,
            priceId: deck.priceId,
            category: deck.category.name
        }))
        return response.ok(formatDecks);
    }

}