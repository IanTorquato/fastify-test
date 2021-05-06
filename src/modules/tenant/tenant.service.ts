import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto'
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto'
import { CustomExceptionError } from '../../exceptions/custom-exception.error'
import { TenantProvider } from '@modulos/tenant/tenant.provider'

const tenantProvider = new TenantProvider()

export class TenantService {
  async create({ nome, email }: CreateTenantDto): Promise<FindTenantDto> {
    if (Number((
      await tenantProvider.countEmailExist(email)
    ).count)) {
      throw new CustomExceptionError('E-mail já cadastrado', 409)
    }

    return await tenantProvider.insertTenant(nome, email)
  }

  async find(): Promise<FindTenantDto[]> {
    return await tenantProvider.find()
  }

  async findOneById(id_tenant: number): Promise<FindTenantDto> {
    return await tenantProvider.findOneById(id_tenant)
  }
}