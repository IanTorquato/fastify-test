import 'dotenv/config'
import { resolve } from 'path'

import databaseConfig from './src/config/database.config'

export default {
  ...databaseConfig,
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations')
  },
}