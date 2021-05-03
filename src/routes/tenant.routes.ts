import { FastifyInstance } from 'fastify'

import { TenantController } from '@modulos/tenant/tenant.controller'

const tenant = new TenantController()

export async function returnTenantRoutes(server: FastifyInstance) {
  server.post('/', tenant.create)
  server.get('/', tenant.find)
  server.get('/:id', tenant.findOneById)
}