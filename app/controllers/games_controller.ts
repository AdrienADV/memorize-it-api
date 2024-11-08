import type { HttpContext } from '@adonisjs/core/http'
import { idUuidValidator } from '#validators/card'
import { assert } from '../assert.js'
import { swipeValidator } from '#validators/game'

import Card from '#models/card'
import DeckService from '#services/DeckService'

export default class GamesController {
    
    public async getRandomCard({ auth, params, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { id: deckId } = await idUuidValidator.validate(params)
        const isDeckinMyLibrary = await DeckService.isDeckInMyLibrary(deckId, auth.user.id)
        if (!isDeckinMyLibrary) {
            return response.forbidden({ error: 'Vous n\'êtes pas autorisé à jouer avec ce deck' })
        }
        const cards = await Card.query().where('deckId', deckId).orderByRaw('RANDOM()').select('id', 'question', 'answer')
        return response.ok(cards)
    }

    public async swipe({ auth, request, response }: HttpContext) {
        assert(auth.user, 'Kindly login')
        const { deckId, isSuccess, cardId } = await request.validateUsing(swipeValidator)
        console.log(deckId, isSuccess, cardId)
        return response.ok({ message: 'Card swiped' })
    }
}