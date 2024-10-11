import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare deckId: string

  @column()
  declare question: string

  @column()
  declare answer: string
}