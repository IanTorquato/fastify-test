import { Static, Type } from '@sinclair/typebox'

export const BaseTenantDto = Type.Object({
  id_tenant: Type.Integer({ minimum: 1 }),
  nome: Type.String({ minLength: 3 }),
  email: Type.String({ format: 'email' }),
})

export type BaseTenantDto = Static<typeof BaseTenantDto>