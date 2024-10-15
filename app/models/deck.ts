import type { HasOne, HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

import Card from './card.js'
import Category from './category.js'

export default class Deck extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare ownerId: string

  @column()
  declare categoryId: number

  @column()
  declare isPublic: boolean

  @column()
  declare description: string

  @column()
  declare priceId: string

  @hasMany(() => Card)
  declare cards: HasMany<typeof Card>

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>
}