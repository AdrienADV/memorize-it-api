import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'deck_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.uuid('deck_id').unsigned().references('id').inTable('decks').onDelete('CASCADE')
      table.unique(['user_id', 'deck_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}