import Joi from 'joi';
import { createInput } from '../apis/core_v1/voucher/dto/create.input';
import { updateInput } from '../apis/core_v1/voucher/dto/update.input';
import { updatePatchInput } from '../apis/core_v1/voucher/dto/update_patch.input';

export class ValidateService {
  validateCreateVoucher = async (body) => {
    const schema = Joi.object(createInput(Joi));

    const { error } = schema.validate(body);

    if (!error) return;

    return error.details[0].message;
  };

  validateUpdatePutVoucher = async (body) => {
    const schema = Joi.object(updateInput(Joi));

    const { error } = schema.validate(body);

    if (!error) return;

    return error.details[0].message;
  };

  validateUpdatePatchVoucher = async (body) => {
    const schema = Joi.object(updatePatchInput(Joi));

    const { error } = schema.validate(body);

    if (!error) return;

    return error.details[0].message;
  };
}
