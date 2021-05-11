import { FastifyInstance } from 'fastify';
import { Type } from '@sinclair/typebox';

import { TenantController } from '@modulos/tenant/tenant.controller';
import { CreateTenantDto } from '@modulos/tenant/dto/create-tenant.dto';

const tenant = new TenantController();

export async function returnTenantRoutes(
  server: FastifyInstance,
): Promise<void> {
  server.use((req: any, res: any, done: any) => {
    console.log('--> Middleware em todas as rotas <--');

    done();
  });

  server.post('/', { schema: { body: CreateTenantDto } }, tenant.create);
  server.get('/', tenant.find);
  server.get(
    '/:id',
    {
      schema: { params: Type.Object({ id: Type.Integer({ minimum: 1 }) }) },
    },
    tenant.findOneById,
  );
}
