import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createAnOrderInDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getRevenueFromOrders = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: { _id: 0, totalRevenue: 1 },
    },
  ]);
  return result;
};

export const OrderServices = {
  createAnOrderInDB,
  getRevenueFromOrders,
};
