import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto';
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto';
import { knexConnection } from '@banco-de-dados/database.connection';

export class TenantProvider {
  async countEmailExist(email: string): Promise<{ count: string | number }> {
    return knexConnection('tenant').where({ email }).first().count();
  }

  async insertTenant(data: CreateTenantDto): Promise<FindTenantDto> {
    return (await knexConnection('tenant').insert(data, '*'))[0];
  }

  async find(): Promise<FindTenantDto[]> {
    return knexConnection('tenant');
  }

  async findOneById(idTenant: number): Promise<FindTenantDto> {
    return knexConnection('tenant').where({ id_tenant: idTenant }).first();
  }
}
