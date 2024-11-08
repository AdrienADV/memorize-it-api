import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { categories, publicDecks } from '../data.js';
import Deck from '#models/deck';
import Card from '#models/card';
import Category from '#models/category';

export default class FakesController {
    public async index({ response }: HttpContext) {
        const categoriesData = await Category.all();
        if (categoriesData.length > 0) {
            return response.badRequest({
                message: 'Fakes already created',
            });
        }
        await Category.createMany(categories);
        const users = await User.createMany([{
            email: "quentin@gmail.com",
            fullName: "Quentin",
            password: "123456",
        }, {
            email: "adrien@gmail.com",
            fullName: "Adrien",
            password: "123456",
        }])

        const newUserAdmin = await User.create({
            email: 'admin@gmail.com',
            password: '123456',
            fullName: 'Admin',
            isAdmin: true,
        });

        const decksWithOwner = publicDecks.map((deck) => ({
            ...deck,
            ownerId: newUserAdmin.id,
        }));

        const decks = await Deck.createMany(decksWithOwner);
        const cardsToCreate = decks.flatMap((deck, index) => {
            const deckCards = publicDecks[index].cards;
            return deckCards.map((card) => ({
                ...card,
                deckId: deck.id,
            }));
        });
        await Card.createMany(cardsToCreate);
        await users[0].related('decks').attach([decks[0].id, decks[1].id])
        return response.ok({
            message: 'Fakes created',
        })
    }
}