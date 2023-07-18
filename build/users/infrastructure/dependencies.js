"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = exports.mysqlUserRepository = void 0;
/* import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetAllProductUseCase } from "../application/GetAllProductUseCase";
import { GetByIdProductUseCase } from "../application/GetByIdProductUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetByIdProductController } from "./controllers/GetByIdProductController";
import { MysqlProductRepository } from "./MysqlProductRepository";
 */
const createUserUseCase_1 = require("../application/createUserUseCase");
const createUserController_1 = require("./controllers/createUserController");
const MysqlUserRepository_1 = require("./MysqlUserRepository");
exports.mysqlUserRepository = new MysqlUserRepository_1.MysqlUserRepository();
exports.createUserUseCase = new createUserUseCase_1.CreateUser(exports.mysqlUserRepository);
exports.createUserController = new createUserController_1.CreateUserController(exports.createUserUseCase);
/* export const mysqlProductRepository = new MysqlProductRepository();
export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);
export const getAllUseCase = new GetAllProductUseCase(mysqlProductRepository);
export const getByIdProductUseCase = new GetByIdProductUseCase(
  mysqlProductRepository
);
export const createProductController = new CreateProductController(
  createProductUseCase
);
export const getAllProductController = new GetAllProductController(
  getAllUseCase
);
export const getByIdProductController = new GetByIdProductController(
  getByIdProductUseCase
); */ 
