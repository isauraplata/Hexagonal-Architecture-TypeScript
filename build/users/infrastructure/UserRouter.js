"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/registro", dependencies_1.createUserController.run.bind(dependencies_1.createUserController));
exports.userRouter.post("/login", dependencies_2.loginUserController.run.bind(dependencies_2.loginUserController));
