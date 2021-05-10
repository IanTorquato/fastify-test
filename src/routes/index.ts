import { FastifyInstance } from 'fastify';

import { returnTenantRoutes } from './tenant.routes';

async function routes(server: FastifyInstance) {
  await server.register(returnTenantRoutes, { prefix: 'tenants' });
}

export { routes };
