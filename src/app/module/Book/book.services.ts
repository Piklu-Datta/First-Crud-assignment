import { TBook } from './book.interface';
import { BookModel } from './book.model';

const createBookIntoDb = async (book: TBook): Promise<TBook> => {
  const result = await BookModel.create(book);
  return result;
};

const getAllBook = async () => {
  const result = await BookModel.find().select('-__v');
  return result;
};

const getSingleBook = async (id: string) => {
  const result = await BookModel.findById(id).select('-__v');
  return result;
};

const updateBook = async (id: string, data: TBook) => {
  const result = await BookModel.findByIdAndUpdate(id, data, {
    new: true,
  }).select('-__v');
  return result;
};

const deleteBook = async (id: string) => {
  const result = await BookModel.findByIdAndDelete(id).select('-__v');
  return result;
};

export const BookServices = {
  createBookIntoDb,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
