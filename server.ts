'use strict';

import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import { Server } from '@hapi/hapi';
import dotenv from 'dotenv';
import { routers } from './src/apis/core_v1/routers/voucher.router';
import { main } from './src/config/connectMongDB';
import { VoucherController } from './src/apis/core_v1/voucher/controllers';

dotenv.config();

export let server: Server;
const voucherController = new VoucherController();

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost',
  });

  const swaggerOptions = {
    swagger: '2.0',
    info: {
      title: 'Test API Documentation',
      version: 'v1',
      contact: {
        name: 'Trần Nhật Bản',
      },
    },
  };

  routers(server);

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

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
