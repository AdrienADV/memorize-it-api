import { CreateDeckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'
import Deck from '#models/deck'

export default class DecksController {

    async create({ auth, request, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { title, categoryId, isPublic, description, priceId } = await request.validateUsing(CreateDeckValidator)
        const deck = await Deck.create({
            title,
            categoryId,
            ownerId: auth.user.id,
            isPublic,
            description,
            priceId,
        })
        return response.created(deck)
    }

    async get({ auth, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const decks = await Deck.query()
            .preload('cards')
            .preload('category')
            .where('ownerId', auth.user.id)

        const decksWithCardCount = decks.map(deck => ({
            id: deck.id,
            name: deck.title,
            cardCount: deck.cards.length,
            categoryIcon: deck.category.iconName,
            categoryFamily: deck.category.iconLibrary,
        }))

        return response.ok(decksWithCardCount)
    }
}