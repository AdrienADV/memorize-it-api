import { CreateDeckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'
import Deck from '#models/deck'
import User from '#models/user'

export default class DecksController {

    async create({ auth, request, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { title, categoryId } = await request.validateUsing(CreateDeckValidator)
        const deck = await Deck.create({
            title,
            categoryId,
            ownerId: auth.user.id,
        })
        await auth.user.related('decks').attach([deck.id])
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
            iconCategoryName: deck.category.iconName,
            iconCategoryFamily: deck.category.iconLibrary,
            isEditable: deck.ownerId === auth.user?.id,
        }))
        return response.ok(decks)
    }
}