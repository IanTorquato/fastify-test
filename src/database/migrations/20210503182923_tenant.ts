import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tenant', (table) => {
    table.increments('id_tenant');
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('usuarios');
}
