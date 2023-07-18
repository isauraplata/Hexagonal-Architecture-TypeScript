"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
/* import { createProductController } from "./dependencies";
import { getAllProductController } from "./dependencies";
import { getByIdProductController } from "./dependencies"; */
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/", dependencies_1.createUserController.run.bind(dependencies_1.createUserController));
/* productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);
productRouter.get(
  "/:id",
  getByIdProductController.run.bind(getByIdProductController)
);
productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
); */ 
