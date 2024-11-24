import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { BicycleServices } from '../bicycles/bicycle.service';
import { TBicycle } from '../bicycles/bicycle.interface';

const createAnOrderInDB = async (req: Request, res: Response) => {
  const newOrder = req.body;
  try {
    const result = await OrderServices.createAnOrderInDB(newOrder);

    const { product: productId, quantity: orderedQuantity } = newOrder;

    const bicycle: any =
      await BicycleServices.getSingleBicycleFromDB(productId);

    if (!bicycle) {
      res.status(404).json({
        status: false,
        message: 'Bicycle not found',
      });
      return;
    }
    if (bicycle.quantity < orderedQuantity) {
      res.status(400).json({
        status: false,
        message: 'Insufficient stock to fulfill the order',
      });
      return;
    }
    const updatedQuantity = bicycle.quantity - orderedQuantity;
    const isInStock = updatedQuantity > 0;

    await BicycleServices.updateBicycle(productId, {
      quantity: updatedQuantity,
      inStock: isInStock,
    } as TBicycle);

    res.status(200).json({
      status: true,
      message: 'Order is Created SuccessFully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while creating an Order',
      status: false,
      error,
    });
  }
};

const getRevenueFromOrders = async (req: Request, res: Response) => {
  try {
    const revenue = await OrderServices.getRevenueFromOrders();
    if (!revenue) {
      res.status(404).json({
        message: 'No revenue data found',
        status: false,
      });
      return;
    } // Send the response with the total revenue
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: revenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'An error occurred while calculating the revenue from orders',
      status: false,
      error: error.message,
    });
  }
};

export const OrderControllers = {
  createAnOrderInDB,
  getRevenueFromOrders,
};
