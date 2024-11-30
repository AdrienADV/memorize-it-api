import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Deck from './deck.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare deckId: string

  @column()
  declare question: string

  @column()
  declare answer: string

  @belongsTo(() => Deck)
  declare deck: BelongsTo<typeof Deck>
}