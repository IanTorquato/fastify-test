import { FastifyInstance } from 'fastify';

import { returnTenantRoutes } from './tenant.routes';

async function routes(server: FastifyInstance): Promise<void> {
  await server.register(returnTenantRoutes, { prefix: 'tenants' });
}

export { routes };
