import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto';
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto';
import { TenantProvider } from '@modulos/tenant/tenant.provider';
import { CustomExceptionError } from '@erros/custom-exception.error';

const tenantProvider = new TenantProvider();

export class TenantService {
  async create(data: CreateTenantDto): Promise<FindTenantDto> {
    if (Number((await tenantProvider.countEmailExist(data.email)).count)) {
      throw new CustomExceptionError('E-mail já cadastrado', 409);
    }

    return tenantProvider.insertTenant(data);
  }

  async find(): Promise<FindTenantDto[]> {
    return tenantProvider.find();
  }

  async findOneById(idTenant: number): Promise<FindTenantDto> {
    return tenantProvider.findOneById(idTenant);
  }
}
