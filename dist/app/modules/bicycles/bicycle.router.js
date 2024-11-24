"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const router = express_1.default.Router();
router.get('/', bicycle_controller_1.BicycleControllers.getBicycles);
router.post('/', bicycle_controller_1.BicycleControllers.createBicycle);
router.get('/:productId', bicycle_controller_1.BicycleControllers.getSingleBicycle);
router.put('/:productId', bicycle_controller_1.BicycleControllers.updateBicycle);
router.delete('/:productId', bicycle_controller_1.BicycleControllers.deleteBicycle);
exports.BicycleRoutes = router;
