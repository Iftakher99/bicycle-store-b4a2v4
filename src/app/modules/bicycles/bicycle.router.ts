import express from 'express';
import { BicycleControllers } from './bicycle.controller';

const router = express.Router();
router.get('/', BicycleControllers.getBicycles);
router.post('/', BicycleControllers.createBicycle);

export const BicycleRoutes = router;
