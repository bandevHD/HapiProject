import { StatusCodes } from 'http-status-codes';
export const RESPONSES = {
  //Successful responses
  OK: {
    CODE: StatusCodes.OK,
    CREATE_VOUCHER_SUCCESS: '200a',
    GET_LIST_VOUCHER_SUCCESS: '200b',
    GET_ONE_VOUCHER_SUCCESS: '200c',
    UPDATE_PUT_VOUCHER_SUCCESS: '200d',
    UPDATE_PATCH_VOUCHER_SUCCESS: '200e',
    DELETE_VOUCHER_SUCCESS: '200e',
  },

  //Client error responses
  BAD_REQUEST: {
    CODE: StatusCodes.BAD_REQUEST,
  },

  NOT_FOUND: {
    CODE: StatusCodes.NOT_FOUND,
    VOUCHER_NOT_FOUND: '404a',
  },

  UNAUTHORIZED: {
    CODE: StatusCodes.UNAUTHORIZED,
  },

  FORBIDDEN: {
    CODE: StatusCodes.FORBIDDEN,
  },

  CONFLICT: {
    CODE: StatusCodes.CONFLICT,
  },

  //server error responses
  INTERNAL_SERVER_ERROR: {
    CODE: StatusCodes.INTERNAL_SERVER_ERROR,
    SOMETHING_WENT_WRONG: '500a',
  },
};