import { knex } from 'knex';

import databaseConfig from '@configuracoes/database.config';

const knexConnection = knex(databaseConfig);

export { knexConnection };
