import User from '#models/user'
import { CreateUserValidator, LoginUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import { assert } from '../assert.js'

export default class AuthController {
    public async login({ request, response }: HttpContext) {
        const payload = request.body()
        const { email, password } = await LoginUserValidator.validate(payload)
        const user = await User.verifyCredentials(email, password)
        const token = await User.accessTokens.create(user)
        response.ok({ message: 'User logged in successfully', token })
    }

    public async register({ request, response }: HttpContext) {
        const payload = request.all()
        const { email, password, fullName } = await CreateUserValidator.validate(payload)
        const isUserAlreadyExist = await User.findBy('email', email)
        if (isUserAlreadyExist) {
            return response.badRequest({ error: "L'utilisateur existe déjà" })
        }

        const createUser = await User.create({
            email: email,
            password: password,
            fullName: fullName,
        })
        const token = await User.accessTokens.create(createUser)
        return {
            message: 'User created successfully',
            token,
        }
    }

    public async logout({ auth }: HttpContext) {
        if (auth.user) {
            try {
                const token = auth.user?.currentAccessToken
                const user = auth.user
                await User.accessTokens.delete(user, token?.identifier)
                return {
                    message: 'User logged out successfully',
                }
            } catch (error) {
                return {
                    message: 'Something went wrong',
                }
            }
        }
    }

    public async me({ auth, response }: HttpContext) {
        assert(auth.user, 'Unauthorized')
        const user = await User.query().where('id', auth.user.id).first()

        return response.ok(user)
    }
}