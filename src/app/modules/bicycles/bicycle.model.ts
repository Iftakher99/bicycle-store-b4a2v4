import mongoose, { model, Schema } from 'mongoose';
import { TBicycle, TBrand, TCycleType } from './bicycle.interface';

const bicycleSchema = new Schema<TBicycle>({
  name: { type: String, required: true },
  brand: {
    type: String,
    required: true,
    enum: Object.values(TBrand),
  },
  price: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    enum: Object.values(TCycleType),
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const BicycleModel = model<TBicycle>('Bicycle', bicycleSchema);
