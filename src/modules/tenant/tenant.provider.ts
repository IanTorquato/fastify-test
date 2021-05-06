import { knexConnection } from '../../database/database.connection'
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto'

export class TenantProvider {
  async countEmailExist(email: string) {
    return await knexConnection('tenant').where({ email }).first().count()
  }

  async insertTenant(nome: string, email: string): Promise<FindTenantDto> {
    return (await knexConnection('tenant')
      .insert({ nome, email }, '*'))[0]
  }

  async find(): Promise<FindTenantDto[]> {
    return await knexConnection('tenant')
  }

  async findOneById(id_tenant: number): Promise<FindTenantDto> {
    return await knexConnection('tenant').where({ id_tenant }).first()
  }
}