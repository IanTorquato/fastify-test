import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto';
import { knexConnection } from '../../database/database.connection';

export class TenantProvider {
  async countEmailExist(email: string) {
    return knexConnection('tenant').where({ email }).first().count();
  }

  async insertTenant(nome: string, email: string): Promise<FindTenantDto> {
    return (await knexConnection('tenant').insert({ nome, email }, '*'))[0];
  }

  async find(): Promise<FindTenantDto[]> {
    return knexConnection('tenant');
  }

  async findOneById(idTenant: number): Promise<FindTenantDto> {
    return knexConnection('tenant').where({ id_tenant: idTenant }).first();
  }
}
