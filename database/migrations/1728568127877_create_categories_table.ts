import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('icon_name').notNullable()
      table.string('icon_library').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}