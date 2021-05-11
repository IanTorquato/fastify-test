import { knex } from 'knex';

import databaseConfig from '../config/database.config';

const knexConnection = knex(databaseConfig);

export { knexConnection };
