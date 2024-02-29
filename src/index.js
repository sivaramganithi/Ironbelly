const Fastify = require('fastify');

const main = async () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/', async (request, reply) => {
    return {
      hello: 'World',
    };
  });

  await fastify.listen(
    process.env.HTTP_LISTENING_PORT || 3000,
    process.env.HTTP_LISTENING_ADDRESS || '::'
  );
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
