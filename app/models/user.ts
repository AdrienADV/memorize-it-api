import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'
import Deck from './deck.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare stripeCustomerId: string | null

  @column()
  declare avatarUrl: string | null

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare isAdmin: boolean

  @manyToMany(() => Deck, {
    pivotTable: 'deck_users',
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'deck_id',
  })
  declare decks: ManyToMany<typeof Deck>

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '365 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}