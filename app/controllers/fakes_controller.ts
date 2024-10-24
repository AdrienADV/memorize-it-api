import Card from '#models/card'
import Category from '#models/category'
import Deck from '#models/deck'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class FakesController {
    /**
     * @summary Create fake data for categories, users, decks, and cards
     * @tag Fake Data
     * @description This endpoint generates several categories, users, and a sample deck with related cards for testing purposes.
     * @operationId createFakeData
     * 
     * @responseBody 200 - {"createProfDeck": "Deck", "createManyCard": "Card[]"} - Successfully created fake data
     * @responseBody 400 - {"error": "Bad Request"} - Invalid data provided
     * @responseBody 500 - {"error": "Internal Server Error"} - Server error occurred
     * 
     * @paramType query
     * @requestBody 200 - {"categories": "Category[]", "users": "User[]", "deck": "Deck", "cards": "Card[]"}
     */
    public async index({ response }: HttpContext) {
        await Category.createMany([
            { name: 'Anglais', iconName: 'language', iconLibrary: 'AntDesign', id: 1 },
            { name: 'Mathématiques', iconLibrary: 'AntDesign', iconName: 'calculator', id: 2 },
            { name: 'Histoire', iconLibrary: 'AntDesign', iconName: 'history', id: 3 },
            { name: 'Géographie', iconLibrary: 'AntDesign', iconName: 'earth', id: 4 },
            { name: 'Physique', iconLibrary: 'AntDesign', iconName: 'experiment', id: 5 },
        ])
        const user = await User.createMany([{
            email: `user_prof@example.com`,
            fullName: 'Prof',
            password: '123456',
        }, {
            email: "quentin@gmail.com",
            fullName: "Quentin",
            password: "123456",
        }, {
            email: "adrien@gmail.com",
            fullName: "Adrien",
            password: "123456",
        }])
        const profProfile = await user[0]
        const quentin = await user[1].id
        const adrien = await user[2].id

        const createProfDeck = await Deck.create({
            title: "Vocabulaire d'anglais",
            ownerId: profProfile.id,
            categoryId: 1,
            isPublic: true,
            description: "Un deck pour apprendre l'anglais",
        })
        await profProfile.related('decks').attach([createProfDeck.id])
        const createManyCard = await Card.createMany([{
            deckId: createProfDeck.id,
            answer: 'Hello',
            question: 'Salut',
        }, {
            deckId: createProfDeck.id,
            answer: 'Goodbye',
            question: 'Au revoir',
        }])

        return response.ok({ createProfDeck, createManyCard })
    }
}