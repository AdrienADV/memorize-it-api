import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class OauthProvider extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: string


  @column()
  declare providerName: string

  @column()
  declare providerId: string
}
