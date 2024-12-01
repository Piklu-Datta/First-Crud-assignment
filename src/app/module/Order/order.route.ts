import express from 'express';
import { OrderController } from './order.controler';

const router = express.Router();

router.post('/create-order', OrderController.createOrder);
router.get('/revenue', OrderController.createRevenue);
export const orderRouter = router;
