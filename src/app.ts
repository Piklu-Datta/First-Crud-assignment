import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BookRoute } from './app/module/Book/book.route';
import { orderRouter } from './app/module/Order/order.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', BookRoute);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
