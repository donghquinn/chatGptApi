import './env';

const bootstrap = async () => {
  const { KoaServer } = await import('./server');

  const server = new KoaServer();

  server.start();
};

await bootstrap();
