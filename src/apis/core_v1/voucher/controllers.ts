import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import { RESPONSES } from '../../../utils.ts/HttpResponseStatus';
import { VoucherService } from './services';
import { ValidateService } from '../../../utils.ts/validationJoi';

export class VoucherController {
  voucherService: VoucherService;
  validateService: ValidateService;
  constructor() {
    this.voucherService = new VoucherService();
    this.validateService = new ValidateService();
  }
  createVoucher = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const isValid = await this.validateService.validateCreateVoucher(req.payload);

      if(isValid) return res.response({
        statusCode: RESPONSES.BAD_REQUEST.CODE,
        message: isValid,
      });
      const data = await this.voucherService.createVoucher(req.payload);
      return res.response({
        statusCode: RESPONSES.OK.CREATE_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };

  getListVoucher = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const data = await this.voucherService.getListVoucher();
      return res.response({
        statusCode: RESPONSES.OK.GET_LIST_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };

  getOneVoucher = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const data = await this.voucherService.getOneVoucher(req.params.id);
      if (!data)
        return res.response({
          statusCode: RESPONSES.NOT_FOUND.VOUCHER_NOT_FOUND,
        });
      return res.response({
        statusCode: RESPONSES.OK.GET_ONE_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };

  updateVoucher = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const isValid = await this.validateService.validateUpdatePutVoucher(req.payload);

      if(isValid) return res.response({
        statusCode: RESPONSES.BAD_REQUEST.CODE,
        message: isValid,
      });
      const data = await this.voucherService.updateVoucher(req.payload);
      if (!data)
        return res.response({
          statusCode: RESPONSES.NOT_FOUND.VOUCHER_NOT_FOUND,
        });
      return res.response({
        statusCode: RESPONSES.OK.UPDATE_PUT_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };

  updateVoucherPatch = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const isValid = await this.validateService.validateUpdatePatchVoucher(req.payload);

      if(isValid) return res.response({
        statusCode: RESPONSES.BAD_REQUEST.CODE,
        message: isValid,
      });
      const data = await this.voucherService.updateVoucherPatch(req.payload);
      if (!data)
        return res.response({
          statusCode: RESPONSES.NOT_FOUND.VOUCHER_NOT_FOUND,
        });
      return res.response({
        statusCode: RESPONSES.OK.UPDATE_PATCH_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };

  deleteVoucher = async (
    req: Request,
    res: ResponseToolkit
  ): Promise<ResponseObject> => {
    try {
      const data = await this.voucherService.deleteVoucher(req.payload);
      if (!data)
        return res.response({
          statusCode: RESPONSES.NOT_FOUND.VOUCHER_NOT_FOUND,
        });
      return res.response({
        statusCode: RESPONSES.OK.DELETE_VOUCHER_SUCCESS,
        data,
      });
    } catch (error) {
      return res.response(error).code(500);
    }
  };
}
