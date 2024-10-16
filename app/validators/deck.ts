import vine from '@vinejs/vine'

export const CreateDeckValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(3),
        categoryId: vine.number().min(1),
        // isPublic: vine.boolean(),
        // description: vine.string().minLength(3),
        // priceId: vine.string().minLength(3),
    })
)