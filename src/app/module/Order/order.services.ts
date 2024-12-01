import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDb = async (orderInfo: TOrder): Promise<TOrder> => {
  const result = await orderModel.create(orderInfo);
  return result;
};

export const calculateRevenue = async () => {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
  ];
  const result = await orderModel.aggregate(pipeline);
  return result;
};

export const orderServices = {
  createOrderIntoDb,
  calculateRevenue,
};
