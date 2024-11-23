import mongoose, { model, Schema } from 'mongoose';
import { TBicycle, TCycleType } from './bicycle.interface';

const bicycleSchema = new Schema<TBicycle>(
  {
    name: {
      type: String,
      required: [true, 'The bicycle name is required.'],
    },
    brand: {
      type: String,
      required: [true, 'The bicycle brand is required.'],
    },
    price: {
      type: Number,
      required: [true, 'The bicycle price is required.'],
    },
    type: {
      type: String,
      required: [true, 'The bicycle type is required.'],
      enum: {
        values: Object.values(TCycleType),
        message: `{VALUE} is not a valid bicycle type.`,
      },
    },
    description: {
      type: String,
      required: [true, 'The bicycle description is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'The bicycle quantity is required.'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'The inStock status is required.'],
    },
  },
  {
    timestamps: true,
  },
);

export const BicycleModel = model<TBicycle>('Bicycle', bicycleSchema);
