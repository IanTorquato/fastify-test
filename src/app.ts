import Fastify, { FastifyInstance } from 'fastify'

import { routes } from './routes'

const server: FastifyInstance = Fastify({ logger: true })

server.setErrorHandler((error, request, reply) => {
  console.log(error)

  const statusCode = error.statusCode ? error.statusCode : error.validation ? 400 : 500

  reply.status(statusCode).send({ error: error.message })
})

server.register(routes)

export { server }