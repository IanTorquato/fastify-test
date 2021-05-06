import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto'
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto'
import { knexConnection } from '../../database/database.connection'
import { CustomExceptionError } from '../../exceptions/custom-exception.error'

export class TenantService {
  async create({ nome, email }: CreateTenantDto): Promise<FindTenantDto> {
    if (Number((
      await knexConnection('tenant').where({ email }).first().count()
    ).count)) {
      throw new CustomExceptionError('E-mail já cadastrado', 409)
    }

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