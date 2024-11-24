import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();
router.post('/', OrderControllers.createAnOrderInDB);
router.get('/revenue', OrderControllers.getRevenueFromOrders);

export const OrderRoutes = router;
