import { FastifyReply, FastifyRequest } from 'fastify';

import { TenantService } from '@modulos/tenant/tenant.service';
import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto';
import { FindTenantDto } from '@modulos/tenant/dto/find-tenant.dto';

interface IParams {
  Params: { id: number };
}

export class TenantController {
  async create(
    request: FastifyRequest<{ Body: CreateTenantDto }>,
    reply: FastifyReply,
  ): Promise<FindTenantDto> {
    const tenantService = new TenantService();

    return reply.status(201).send(await tenantService.create(request.body));
  }

  async find(request: FastifyRequest, reply: FastifyReply): Promise<FindTenantDto[]> {
    const tenantService = new TenantService();

    return reply.status(201).send(await tenantService.find());
  }

  async findOneById(request: FastifyRequest<IParams>, reply: FastifyReply): Promise<FindTenantDto> {
    const tenantService = new TenantService();

    return reply.status(201).send(await tenantService.findOneById(request.params.id));
  }
}
