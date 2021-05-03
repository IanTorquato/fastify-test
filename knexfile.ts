import 'dotenv/config'
import { resolve } from 'path'

import databaseConfig from './src/config/database'

export default {
  ...databaseConfig,
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations')
  },
}