import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    product: {
      type: String,
      required: [true, 'productId is required'],
    },
    quantity: {
      type: Number,
      max: 1000,
    },
    totalPrice: {
      type: Number,
      max: 1000000,
    },
  },
  { timestamps: true },
);

export const orderModel = model<TOrder>('Order', orderSchema);
