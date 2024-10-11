import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'

export default class DeckUser extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare deckId: string

  @column()
  declare userId: string
}