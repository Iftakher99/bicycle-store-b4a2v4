"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const bicycle_service_1 = require("../bicycles/bicycle.service");
const createAnOrderInDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = req.body;
    try {
        const result = yield order_service_1.OrderServices.createAnOrderInDB(newOrder);
        const { product: productId, quantity: orderedQuantity } = newOrder;
        const bicycle = yield bicycle_service_1.BicycleServices.getSingleBicycleFromDB(productId);
        if (!bicycle) {
            res.status(404).json({
                status: false,
                message: 'Bicycle not found',
            });
            return;
        }
        if (bicycle.quantity < orderedQuantity) {
            res.status(400).json({
                status: false,
                message: 'Insufficient stock to fulfill the order',
            });
            return;
        }
        const updatedQuantity = bicycle.quantity - orderedQuantity;
        const isInStock = updatedQuantity > 0;
        yield bicycle_service_1.BicycleServices.updateBicycle(productId, {
            quantity: updatedQuantity,
            inStock: isInStock,
        });
        res.status(200).json({
            status: true,
            message: 'Order is Created SuccessFully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while creating an Order',
            status: false,
            error,
        });
    }
});
const getRevenueFromOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield order_service_1.OrderServices.getRevenueFromOrders();
        if (!revenue) {
            res.status(404).json({
                message: 'No revenue data found',
                status: false,
            });
            return;
        } // Send the response with the total revenue
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: {
                totalRevenue: revenue,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while calculating the revenue from orders',
            status: false,
            error: error.message,
        });
    }
});
exports.OrderControllers = {
    createAnOrderInDB,
    getRevenueFromOrders,
};
