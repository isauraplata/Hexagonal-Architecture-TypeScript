/* import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetAllProductUseCase } from "../application/GetAllProductUseCase";
import { GetByIdProductUseCase } from "../application/GetByIdProductUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetAllProductController } from "./controllers/GetAllProductController";
import { GetByIdProductController } from "./controllers/GetByIdProductController";
import { MysqlProductRepository } from "./MysqlProductRepository";
 */

import { CreateUser } from "../application/createUserUseCase";
import { CreateUserController } from "./controllers/createUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { Login } from "../application/loginUSeCase";
import { LoginController } from "./controllers/loginUserController";


export const mysqlUserRepository=new MysqlUserRepository();
export const createUserUseCase = new CreateUser(
   mysqlUserRepository
);
export const createUserController = new CreateUserController(
  createUserUseCase
);


export const loginUseCase= new Login(mysqlUserRepository);
export const loginUserController= new LoginController(loginUseCase);




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