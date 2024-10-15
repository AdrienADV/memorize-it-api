import Card from '#models/card'
import Category from '#models/category'
import Deck from '#models/deck'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class FakesController {
    public async index({ response }: HttpContext) {
        await Category.createMany([
            { name: 'Anglais', iconName: 'language', iconLibrary: 'AntDesign', id: 1 },
            { name: 'Mathématiques', iconLibrary: 'calculator', iconName: 'AntDesign', id: 2 },
            { name: 'Histoire', iconLibrary: 'history', iconName: 'AntDesign', id: 3 },
            { name: 'Géographie', iconLibrary: 'earth', iconName: 'AntDesign', id: 4 },
            { name: 'Physique', iconLibrary: 'experiment', iconName: 'AntDesign', id: 5 },
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

        const prof = await user[0].id
        const quentin = await user[1].id
        const adrien = await user[2].id

        const createProfDeck = await Deck.create({
            title: "Vocabulaire d'anglais",
            ownerId: prof,
            categoryId: 1,
            isPublic: true,
            description: "Un deck pour apprendre l'anglais",
        })
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