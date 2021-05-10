import { Static } from '@sinclair/typebox';

import { BaseTenantDto } from './base-tenant.dto';

export type FindTenantDto = Static<typeof BaseTenantDto>;
