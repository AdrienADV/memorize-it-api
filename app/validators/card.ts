import vine from '@vinejs/vine'

export const CreateCardValidator = vine.compile(
    vine.object({
        question: vine.string().minLength(3),
        answer: vine.string().minLength(3),
        deckId: vine.string().uuid(),
    })
)

export const idUuidValidator = vine.compile(
    vine.object({
        id: vine.string().uuid(),
    })
)

// GetCardValidator