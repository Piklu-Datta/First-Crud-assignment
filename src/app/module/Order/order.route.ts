import express from 'express';
import { OrderController } from './order.controler';

const router = express.Router();

router.post('/orders', OrderController.createOrder);
router.get('/orders/revenue', OrderController.createRevenue);
export const orderRouter = router;
