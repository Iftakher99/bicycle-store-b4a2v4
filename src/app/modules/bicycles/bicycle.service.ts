import { TBicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.model';

const createBicycleIntoDB = async (bicycle: TBicycle) => {
  try {
    const result = await BicycleModel.create(bicycle);
    return result;
  } catch (error: any) {
    console.error('Error creating bicycle:', error.message);
    throw new Error('Failed to create bicycle');
  }
};

const getAllBicycleFromDB = async () => {
  try {
    const result = await BicycleModel.find();
    return result;
  } catch (error: any) {
    console.error('Error finding bicycles:', error.message);
    throw new Error('Failed to Find bicycle');
  }
};

export const BicycleServices = {
  createBicycleIntoDB,
  getAllBicycleFromDB,
};
