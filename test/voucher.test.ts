'use strict';
import supertest from 'supertest';
import { init } from '../server';
import { main } from '../src/config/connectMongDB';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongodb = main();

describe('Voucher', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_ATLAS);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('get list voucher', () => {
    describe('get list voucher not found', () => {
      test('should return a []', async () => {
        const id = '63fd7914938c30c6770d0c5b';
        await supertest(init)
          .get(`/api-v1/voucher/get-voucher/${id}`)
          .expect(404);
      });
    });
  });
});
