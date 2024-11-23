import { Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  const bicycle = req.body;
  console.log(bicycle);

  try {
    const result = await BicycleServices.createBicycleIntoDB(bicycle);
    res.status(200).json({
      success: true,
      message: 'Bicycle is Created SuccessFully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'An error occurred while creating Bicycle',
      success: false,
      error,
    });
  }
};
const getBicycles = async (req: Request, res: Response) => {
  try {
    const result = await BicycleServices.getAllBicycleFromDB();
    res.status(200).json({
      message: 'All Bicycles Retrieved Successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while getting Bicycle',
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getBicycles,
};
