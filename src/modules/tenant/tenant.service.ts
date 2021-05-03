import { knexConnection } from '../../database/database.connection'

export class TenantService {
  async create(createTenant: any) {
    return await knexConnection('tenant').insert(createTenant).returning('*')[0]
  }

  async find() {
    return await knexConnection('tenant').select('*')
  }
}