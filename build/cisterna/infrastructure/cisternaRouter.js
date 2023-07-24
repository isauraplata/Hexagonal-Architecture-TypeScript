"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cisternaRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
exports.cisternaRouter = express_1.default.Router();
exports.cisternaRouter.post("/", dependencies_1.sendLevelController.run.bind(dependencies_1.sendLevelController));
exports.cisternaRouter.get("/getAll", dependencies_2.getLevelController.run.bind(dependencies_2.getLevelController));
