import vine from '@vinejs/vine'

export const CreateCardValidator = vine.compile(
    vine.object({
        question: vine.string().minLength(1).maxLength(255),
        answer: vine.string().minLength(1).maxLength(255),
        deckId: vine.string().uuid(),
    })
)

export const idUuidValidator = vine.compile(
    vine.object({
        id: vine.string().uuid(),
    })
)