import Fastify, { FastifyInstance } from 'fastify'

import { routes } from './routes'

const server: FastifyInstance = Fastify({ logger: true })

server.register(routes)

export { server }