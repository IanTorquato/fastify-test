import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto';
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto';
import { TenantProvider } from '@modulos/tenant/tenant.provider';
import { CustomExceptionError } from '../../exceptions/custom-exception.error';

const tenantProvider = new TenantProvider();

export class TenantService {
  async create({ nome, email }: CreateTenantDto): Promise<FindTenantDto> {
    if (Number((await tenantProvider.countEmailExist(email)).count)) {
      throw new CustomExceptionError('E-mail já cadastrado', 409);
    }

    return tenantProvider.insertTenant(nome, email);
  }

  async find(): Promise<FindTenantDto[]> {
    return tenantProvider.find();
  }

  async findOneById(idTenant: number): Promise<FindTenantDto> {
    return tenantProvider.findOneById(idTenant);
  }
}
