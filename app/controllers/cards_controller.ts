import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'
import { CreateCardValidator, deleteCardValidator, editCardValidator, idUuidValidator } from '#validators/card'
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

    async modify({ request, auth, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { id, question, answer } = await request.validateUsing(editCardValidator)
        const card = await Card.query().where('id', id).preload('deck').firstOrFail()
        const isDeckMine = await DeckService.verifyOwnership(card.deckId, auth.user.id)
        if (!isDeckMine) {
            return response.forbidden({ error: 'You are not allowed to modify this card' })
        }
        card.question = question
        card.answer = answer
        await card.save()
        return response.ok({ message: 'Card modified successfully', card })
    }

    async delete({ auth, request, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { cardId } = await request.validateUsing(deleteCardValidator)
        const card = await Card.query().where('id', cardId).preload('deck').firstOrFail()
        const isDeckMine = await DeckService.verifyOwnership(card.deckId, auth.user.id)
        if (!isDeckMine) {
            return response.forbidden({ error: 'You are not allowed to delete this card' })
        }
        await card.delete()
        return response.ok({ message: 'Card deleted successfully' })
    }

    async get({ auth, params, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { id } = await idUuidValidator.validate(params)
        const isDeckMine = await DeckService.verifyOwnership(id, auth.user.id)
        if (!isDeckMine) {
            return response.forbidden({ error: 'You are not allowed to create a card in this deck' })
        }
        const cards = await Card.query().where('deckId', id)
        return response.ok({
            deckName: isDeckMine.title,
            cards
        })
    }
}