import { Request, Response, NextFunction } from 'express';
import { BookServices } from './book.services';
import { bookValidationSchema } from './book.validation';

const createBook = async (req: Request, res: Response) => {
  try {
    const bookInfo = req.body;
    const zodValidation = bookValidationSchema.parse(bookInfo);
    const result = await BookServices.createBookIntoDb(zodValidation);

    res.status(201).json({
      message: 'Book created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};

const getBook = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBook();
    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};
const getOneBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await BookServices.getSingleBook(id);
    res.status(200).json({
      message: 'Book retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};

const getUpdatedBook = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const id = req.params.productId;
    const result = await BookServices.updateBook(id, data);

    res.status(200).json({
      message: 'Book data updated successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};

const deletedBookData = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await BookServices.deleteBook(id);
    console.log(result);
    res.status(200).json({
      message: 'Book deleted successfully',
      status: true,
      data: {},
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};

export const BookController = {
  createBook,
  getBook,
  getOneBook,
  getUpdatedBook,
  deletedBookData,
};
