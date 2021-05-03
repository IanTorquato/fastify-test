import { knexConnection } from '../../database/database.connection'

export class TenantService {
  async create(createTenant: any) {
    return await knexConnection('tenant').insert(createTenant).returning('*')
  }

  async find() {
    return await knexConnection('tenant')
  }

  async findOneById(id_tenant: number) {
    return await knexConnection('tenant').where({ id_tenant })
  }
}