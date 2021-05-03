import { FastifyInstance } from 'fastify'

import { TenantController } from '../modules/tenant/tenant.controller'

const tenant = new TenantController()

export async function returnTenantRoutes(server: FastifyInstance) {
  server.post('/', tenant.create)
  server.get('/', tenant.find)
}