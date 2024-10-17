import Deck from '#models/deck'
import User from '#models/user'

class DeckService {
    /**
     * Vérifie si le deck existe et appartient à l'utilisateur
     * @param deckId
     * @param userId
     * @param response
     * @returns Le deck ou une réponse 401 si le deck n'appartient pas à l'utilisateur
     */
    public async verifyOwnership(deckId: string, userId: string) {
        const deck = await Deck.query().where('id', deckId).andWhere('ownerId', userId).first()
        return deck as Deck
    }
    public async isDeckinMyLibrary(deckId: string, userId: string) {
        const user = await User.query().where('id', userId).preload('decks').first()
        const isDeckMine = user?.decks.find(deck => deck.id === deckId)
        return isDeckMine as Deck || null
    }
}
export default new DeckService()
