import mongoose from 'mongoose';

export interface TOrder {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
