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
exports.BicycleControllers = void 0;
const bicycle_service_1 = require("./bicycle.service");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = req.body;
    try {
        const result = yield bicycle_service_1.BicycleServices.createBicycleIntoDB(bicycle);
        res.status(200).json({
            message: 'Bicycle is Created SuccessFully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'An error occurred while creating Bicycle',
            success: false,
            error: error.errors,
            stack: error.stack,
        });
    }
});
const getBicycles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield bicycle_service_1.BicycleServices.getAllBicycleFromDB(searchTerm);
        if (result.length === 0) {
            throw new Error('No Bicycle found by your search term');
        }
        res.status(200).json({
            message: `${result.length} Bicycles Retrieved Successfully`,
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error.message === 'No Bicycle found by your search term') {
            res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: 'An error occurred while getting Bicycle',
            });
        }
    }
});
const getSingleBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield bicycle_service_1.BicycleServices.getSingleBicycleFromDB(productId);
        res.status(200).json({
            message: ' Bicycle Retrieved Successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while getting single Bicycle',
            error,
        });
    }
});
const updateBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycle = req.body;
        const productId = req.params.productId;
        const result = yield bicycle_service_1.BicycleServices.updateBicycle(productId, bicycle);
        res.status(200).json({
            message: ' Bicycle Updated Successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating Bicycle',
            error,
        });
    }
});
const deleteBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield bicycle_service_1.BicycleServices.deleteBicycle(productId);
        res.status(200).json({
            message: ' Bicycle deleted Successfully',
            success: true,
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while deleting Bicycle',
            error,
        });
    }
});
exports.BicycleControllers = {
    createBicycle,
    getBicycles,
    getSingleBicycle,
    updateBicycle,
    deleteBicycle,
};
