"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleModel = void 0;
const mongoose_1 = require("mongoose");
const bicycle_interface_1 = require("./bicycle.interface");
const bicycleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The bicycle name is required.'],
        trim: true,
    },
    brand: {
        type: String,
        required: [true, 'The bicycle brand is required.'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'The bicycle price is required.'],
        min: [0, 'Price must be a positive number'],
    },
    type: {
        type: String,
        required: [true, 'The bicycle type is required.'],
        enum: {
            values: Object.values(bicycle_interface_1.TCycleType),
            message: `{VALUE} is not a valid bicycle type.`,
        },
    },
    description: {
        type: String,
        required: [true, 'The bicycle description is required.'],
    },
    quantity: {
        type: Number,
        required: [true, 'The bicycle quantity is required.'],
        min: [1, 'Quantity must be a positive number'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'The inStock status is required.'],
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.BicycleModel = (0, mongoose_1.model)('Bicycle', bicycleSchema);
