import { NextFunction, Request, Response } from 'express';

import { BookModel } from '../Book/book.model';
import { orderServices } from './order.services';
import { orderValidationSchema } from './order.validation';

const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const zodValidation = orderValidationSchema.parse(req.body);
  const { email, product, quantity, totalPrice } = zodValidation;

  try {
   
    const book = await BookModel.findById(product);

    if (!book) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    }


    if (book.quantity < quantity) {
      return res.status(400).json({
        message: 'Insufficient stock',
        success: false,
      });
    }


    const result = await orderServices.createOrderIntoDb({
      email,
      product,
      quantity,
      totalPrice,
    });

  
    book.quantity -= quantity;
    book.inStock = book.quantity > 0;
    await book.save();

   
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      message: 'An error occurred while creating the order',
      success: false,
      error: error,
    });
  }
  next();
};

const createRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.calculateRevenue();
    const totalRevenue = result[0].totalRevenue;
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: 'An error occurred while calculating revenue',
      success: false,
      error,
    });
  }
};

export const OrderController = {
  createOrder,
  createRevenue,
};
