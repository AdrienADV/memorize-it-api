import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('deck_id').references('id').inTable('decks').onDelete('CASCADE').notNullable()
      table.string('question').notNullable()
      table.string('answer').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}