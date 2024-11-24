"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bicycle_router_1 = require("./app/modules/bicycles/bicycle.router");
const order_router_1 = require("./app/modules/orders/order.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app routes
app.use('/api/products/', bicycle_router_1.BicycleRoutes);
app.use('/api/orders/', order_router_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Server Running 🏃🏻‍♂️‍➡️');
});
exports.default = app;
