import { SendStatus } from "../application/sendStatusUseCase";
import { SendStatusController } from "./controllers/sendStatusController";
import { MysqlRotoplasRepository } from "./MysqlRotoplasRepository";
import { FindUser } from "../application/findUserUseCase";
import { FindUserController } from "./controllers/findUserController";

import { GetAllStatus } from "../application/getAllStatusUseCase";
import { GetAllStatusController } from "./controllers/getAllStatusController";


export const mysqlRotoplasRepository=new MysqlRotoplasRepository();
export const sendStatusUseCase= new SendStatus(mysqlRotoplasRepository);
export const sendStatusController=new SendStatusController(sendStatusUseCase);

export const getAllStatusUseCase= new GetAllStatus(mysqlRotoplasRepository);

export const getAllStatusController= new GetAllStatusController(getAllStatusUseCase);





