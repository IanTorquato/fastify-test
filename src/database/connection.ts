import knex from 'knex'

import databaseConfig from '../config/database'

const knexConnection = knex(databaseConfig)

export { knexConnection }