import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'decks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)
      table.uuid('owner_id').references('id').inTable('users').onDelete('CASCADE')
      table.string('title').notNullable()
      table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.boolean('is_public').defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}