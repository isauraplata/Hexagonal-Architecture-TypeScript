import { CreateUser } from "../application/createUserUseCase";
import { CreateUserController } from "./controllers/createUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { Login } from "../application/loginUSeCase";
import { LoginController } from "./controllers/loginUserController";

export const mysqlUserRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUser(mysqlUserRepository);
export const createUserController = new CreateUserController(createUserUseCase);

export const loginUseCase = new Login(mysqlUserRepository);
export const loginUserController = new LoginController(loginUseCase);
