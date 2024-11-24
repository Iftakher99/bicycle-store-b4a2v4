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
exports.BicycleServices = void 0;
const bicycle_model_1 = require("./bicycle.model");
const createBicycleIntoDB = (bicycle) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.BicycleModel.create(bicycle);
    return result;
});
const getAllBicycleFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = searchTerm
            ? {
                $or: [
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { brand: { $regex: searchTerm, $options: 'i' } },
                    { type: { $regex: searchTerm, $options: 'i' } },
                ],
            }
            : {};
        const bicycles = yield bicycle_model_1.BicycleModel.find(filter);
        return bicycles;
    }
    catch (error) {
        throw new Error('Failed to retrieve bicycles: ' + error.message);
    }
});
const getSingleBicycleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.BicycleModel.findById(id);
    return result;
});
const updateBicycle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.BicycleModel.findByIdAndUpdate(id, data, { new: true });
    return result;
});
const deleteBicycle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.BicycleModel.findByIdAndDelete(id);
    return result;
});
exports.BicycleServices = {
    createBicycleIntoDB,
    getAllBicycleFromDB,
    getSingleBicycleFromDB,
    updateBicycle,
    deleteBicycle,
};
