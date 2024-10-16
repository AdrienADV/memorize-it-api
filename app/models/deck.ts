import type { HasMany, BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

import Card from './card.js'
import Category from './category.js'
import User from './user.js'

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

  // @hasOne(() => User, {
  //   localKey: 'ownerId',
  //   foreignKey: 'id',
  // })
  // declare owner: HasOne<typeof User>
}