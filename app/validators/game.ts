import vine from '@vinejs/vine'

export const swipeValidator = vine.compile(
    vine.object({
        deckId: vine.string().uuid(),
        cardId: vine.number(),
        isSuccess: vine.boolean()
    })
)