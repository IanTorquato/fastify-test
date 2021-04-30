import fast from 'fastify'
const fastify = fast({ logger: true })

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3333)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()