import Voucher from '../../../model/voucher';
export class VoucherService {
  createVoucher = async (data) => {
    try {
      const voucher = new Voucher(data);
      const voucherSave = await voucher.save();
      return voucherSave;
    } catch (error) {
      throw new Error(error);
    }
  };

  getListVoucher = async () => {
    try {
      return await Voucher.find();
    } catch (error) {
      throw new Error(error);
    }
  };

  getOneVoucher = async (id: string) => {
    try {
      return await Voucher.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateVoucher = async (data) => {
    try {
      return await Voucher.findByIdAndUpdate({ _id: data._id }, data, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateVoucherPatch = async (data) => {
    try {
      return await Voucher.findByIdAndUpdate({ _id: data._id }, data, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteVoucher = async (data) => {
    try {
      return await Voucher.findByIdAndUpdate(
        { _id: data._id },
        { isDelete: true },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  };
}
