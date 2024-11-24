import { Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  const bicycle = req.body;
  try {
    const result = await BicycleServices.createBicycleIntoDB(bicycle);
    res.status(200).json({
      message: 'Bicycle is Created SuccessFully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'An error occurred while creating Bicycle',
      status: false,
      error: error.errors,
      stack: error.stack,
    });
  }
};
const getBicycles = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await BicycleServices.getAllBicycleFromDB(
      searchTerm as string,
    );
    if (result.length === 0) {
      throw new Error('No Bicycle found by your search term');
    }
    res.status(200).json({
      message: 'Bicycles Retrieved Successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    if (error.message === 'No Bicycle found by your search term') {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: false,
        message: 'An error occurred while getting Bicycle',
      });
    }
  }
};

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await BicycleServices.getSingleBicycleFromDB(productId);
    res.status(200).json({
      message: ' Bicycle Retrieved Successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'An error occurred while getting single Bicycle',
      error,
    });
  }
};
const updateBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;
    const productId = req.params.productId;
    const result = await BicycleServices.updateBicycle(productId, bicycle);
    res.status(200).json({
      message: ' Bicycle Updated Successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'An error occurred while updating Bicycle',
      error,
    });
  }
};
const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    await BicycleServices.deleteBicycle(productId);
    res.status(200).json({
      message: ' Bicycle deleted Successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'An error occurred while deleting Bicycle',
      error,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getBicycles,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};
