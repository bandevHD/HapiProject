'use strict';

import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
import dotenv from 'dotenv';
import { routers } from './src/apis/core_v1/routers/voucher.router';
import { main } from './src/config/connectMongDB';
import { plugins } from './swagger/config';

dotenv.config();

export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: process.env.HOST,
  });

  routers(server);

  await server.register(plugins);

  return server;
};

main();

export const start = async function (): Promise<void> {
  console.log(
    `Listening on ${server.settings.host}:${server.settings.port}`,
    server.info.uri
  );
  return server.start();
};

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
  console.error(err);
  process.exit(1);
});
