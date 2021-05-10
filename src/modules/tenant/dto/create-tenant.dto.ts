import { Static, Type } from '@sinclair/typebox';

import { BaseTenantDto } from './base-tenant.dto';

export const CreateTenantDto = Type.Omit(BaseTenantDto, ['id_tenant']);

export type CreateTenantDto = Static<typeof CreateTenantDto>;
