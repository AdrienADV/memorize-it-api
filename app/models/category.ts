import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Deck from './deck.js'
import { type HasMany } from '@adonisjs/lucid/types/relations'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare iconName: string

  @column()
  declare iconLibrary: string

  @hasMany(() => Deck)
  declare decks: HasMany<typeof Deck>
}