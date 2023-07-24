"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotoplasRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
exports.rotoplasRouter = express_1.default.Router();
exports.rotoplasRouter.post("/", dependencies_1.sendStatusController.run.bind(dependencies_1.sendStatusController));
exports.rotoplasRouter.get("/getAll", dependencies_2.getAllStatusController.run.bind(dependencies_2.getAllStatusController));
