import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';

const voucherSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
    discount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    startTimeAt: {
      type: String,
      required: true,
    },
    endTimeAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

voucherSchema.pre('find', function() {
  this.where({ isDelete: false });
});

voucherSchema.pre('findOne', function() {
  this.where({ isDelete: false });
});

export default mongoose.model('Voucher', voucherSchema);
