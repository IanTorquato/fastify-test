import { Knex } from 'knex'

export async function up(Knex: Knex): Promise<void> {
  return Knex.schema.createTable('tenant', table => {
    table.increments('id_tenant')
    table.string('nome').notNullable()
    table.string('email').notNullable().unique()
    table.timestamp('created_at').defaultTo(Knex.fn.now())
    table.timestamp('updated_at').defaultTo(Knex.fn.now())
  })
}

export async function down(Knex: Knex): Promise<void> {
  return Knex.schema.dropTable('usuarios')
}