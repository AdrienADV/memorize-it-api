import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class CardPerformance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cardId: number

  @column()
  declare userId: string

  @column()
  declare attempts: number

  @column()
  declare successCount: number

  @column()
  declare lastAttempt: Date

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
  // à tester
}