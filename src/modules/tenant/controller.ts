import { FastifyReply, FastifyRequest } from 'fastify'

import { TenantService } from './service'

export class TenantController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const tenantService = new TenantService()

    return await reply.status(201).send(await tenantService.create(request.body))
  }

  async find(request: FastifyRequest, reply: FastifyReply) {
    const tenantService = new TenantService()

    return await reply.status(201).send(await tenantService.find())
  }
}