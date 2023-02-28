import { Server } from '@hapi/hapi';
import Joi from 'joi';
import { VoucherController } from '../voucher/controllers';

const voucherController = new VoucherController();
export const routers = async (server: Server) => {
  server.route({
    method: 'POST',
    path: '/api-v1/voucher/create-voucher',
    options: {
      handler: voucherController.createVoucher,
      description: 'Create voucher',
      tags: ['api', 'Voucher'],
      notes: ['Create voucher in database'],
      validate: {
        payload: Joi.object({
          title: Joi.string().required(),

          content: Joi.string().required(),

          description: Joi.string().required(),

          discount: Joi.number().required(),

          quantity: Joi.number().required(),

          startTimeAt: Joi.string().required(),

          endTimeAt: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/api-v1/voucher/get-list-voucher',
    options: {
      handler: voucherController.getListVoucher,
      description: 'Get list voucher',
      tags: ['api', 'Voucher'],
      notes: ['Get list voucher in database'],
    },
  });

  server.route({
    method: 'GET',
    path: '/api-v1/voucher/get-voucher/{id}',
    options: {
      handler: voucherController.getOneVoucher,
      description: 'Get one voucher',
      tags: ['api', 'Voucher'],
      notes: ['Get one voucher in database'],
      validate: {
        params: Joi.object({
          id: Joi.string().required().description('the id for the todo item'),
        }),
      },
    },
  });

  server.route({
    method: 'PUT',
    path: '/api-v1/voucher/update-voucher',
    options: {
      handler: voucherController.updateVoucher,
      description: 'Update put voucher',
      tags: ['api', 'Voucher'],
      notes: ['update put voucher in database'],
      validate: {
        payload: Joi.object({
          _id: Joi.string().required(),

          title: Joi.string().required(),

          content: Joi.string().required(),

          description: Joi.string().required(),

          discount: Joi.number().required(),

          quantity: Joi.number().required(),

          startTimeAt: Joi.string().required(),

          endTimeAt: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: 'PATCH',
    path: '/api-v1/voucher/update-voucher',
    options: {
      handler: voucherController.updateVoucherPatch,
      description: 'Update patch voucher',
      tags: ['api', 'Voucher'],
      notes: ['update patch voucher in database'],
      validate: {
        payload: Joi.object({
          _id: Joi.string().required(),

          title: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: 'DELETE',
    path: '/api-v1/voucher/delete-voucher',
    options: {
      handler: voucherController.deleteVoucher,
      description: 'Delete voucher',
      tags: ['api', 'Voucher'],
      notes: ['Delete voucher in database'],
      validate: {
        payload: Joi.object({
          _id: Joi.string().required(),
        }),
      },
    },
  });
};
