import { CreateDeckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'
import Deck from '#models/deck'
import User from '#models/user'

// const decksWithCardCount = decks.map(deck => ({
//     id: deck.id,
//     name: deck.title,
//     cardCount: deck.cards.length,
//     categoryIcon: deck.category.iconName,
//     categoryFamily: deck.category.iconLibrary,
// }))
// return response.ok(decksWithCardCount)

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
        const decksUser = await User.query().where('id', auth.user.id).preload('decks', (query) => {
            query.preload('category')
            query.preload('cards')
        }).first()

        const decks = decksUser?.decks.map(deck => ({
            id: deck.id,
            name: deck.title,
            cardCount: deck.cards.length,
            categoryIcon: deck.category.iconName,
            categoryFamily: deck.category.iconLibrary,
            isEditable: deck.ownerId === auth.user?.id,
        }))
        return response.ok(decks)
    }

    async addDeckToUser({ auth, request, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        return response.created({ message: 'Deck added to user' })
    }
}