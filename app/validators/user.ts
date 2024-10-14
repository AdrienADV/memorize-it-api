import vine from '@vinejs/vine'

export const CreateUserValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(5),
        fullName: vine.string().minLength(3)
    })
)
export const LoginUserValidator = vine.compile(
    vine.object({
        password: vine.string().minLength(5),
        email: vine.string().email()
    })
)

// LoginUserValidator.messagesProvider = new SimpleMessagesProvider({
//     'email.required': "L'adresse e-mail est obligatoire",
//     'email': "Le format de l'adresse e-mail est incorrect",
//     'password.required': 'Le mot de passe est obligatoire',
//     'password.minLength': 'Le mot de passe doit faire au moins 5 caractères',
// })