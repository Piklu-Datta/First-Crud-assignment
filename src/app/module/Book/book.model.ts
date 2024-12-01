import { Schema, model, connect } from 'mongoose';
import { TBook } from './book.interface';

const bookSchema = new Schema<TBook>(
  {
    title: {
      type: String,
      require: [true, 'title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      maxLength: [20],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      max: 1000000,
    },
    category: {
      type: String,
      required: [true, 'category is required'],
      enum: {
        values: [
          'Fiction',
          'Science',
          'SelfDevelopment',
          'Poetry',
          'Religious',
        ],
        message: '{VALUE} is not supported',
      },
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      maxLength: 100,
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      max: 1000,
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock is required'],
    },
  },
  { timestamps: true },
);

export const BookModel = model<TBook>('Book', bookSchema);
