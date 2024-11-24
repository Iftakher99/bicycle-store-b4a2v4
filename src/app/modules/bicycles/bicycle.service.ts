import { TBicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.model';

const createBicycleIntoDB = async (bicycle: TBicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicycleFromDB = async (searchTerm?: string) => {
  try {
    const filter = searchTerm
      ? {
          $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { type: { $regex: searchTerm, $options: 'i' } },
          ],
        }
      : {};

    const bicycles = await BicycleModel.find(filter);
    return bicycles;
  } catch (error: any) {
    throw new Error('Failed to retrieve bicycles: ' + error.message);
  }
};

const getSingleBicycleFromDB = async (id: string) => {
  const result = await BicycleModel.findById(id);
  return result;
};
const updateBicycle = async (id: string, data: TBicycle) => {
  const result = await BicycleModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const deleteBicycle = async (id: string) => {
  const result = await BicycleModel.findByIdAndDelete(id);
  return result;
};

export const BicycleServices = {
  createBicycleIntoDB,
  getAllBicycleFromDB,
  getSingleBicycleFromDB,
  updateBicycle,
  deleteBicycle,
};
