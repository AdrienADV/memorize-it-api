import vine from '@vinejs/vine'



export const checkoutValidator = vine.compile(
    vine.object({
        deckId: vine.string().uuid(),
    })
)