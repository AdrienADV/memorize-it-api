import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'
import { CreateCardValidator, GetCardValidator } from '#validators/card'
import Card from '#models/card'
import DeckService from '#services/DeckService'

export default class CardsController {

    async create({ request, auth, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { question, answer, deckId } = await request.validateUsing(CreateCardValidator)
        const isDeckMine = await DeckService.verifyOwnership(deckId, auth.user.id)
        if (!isDeckMine) {
            return response.forbidden({ error: 'You are not allowed to create a card in this deck' })
        }
        const card = await Card.create({
            question,
            answer,
            deckId,
        })
        return response.created({ message: 'Card created successfully', card })
    }
    async get({ auth, params, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { id } = await GetCardValidator.validate(params)
        console.log(id)
        const isDeckMine = await DeckService.verifyOwnership(id, auth.user.id)
        if (!isDeckMine) {
            return response.forbidden({ error: 'You are not allowed to create a card in this deck' })
        }
        const cards = await Card.query().where('deckId', id)
        return response.ok(cards)
    }
}