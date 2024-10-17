import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'card_performances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('card_id').references('id').inTable('cards').onDelete('CASCADE').notNullable()
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable()
      table.integer('attempts').defaultTo(0)
      table.integer('success_count').defaultTo(0)
      table.timestamp('last_attempt').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}