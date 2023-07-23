import { SendLevel } from "../application/sendLevelUseCase";
import { SendLevelController } from "./controllers/sendLevelController";
import { MysqlCisternaRepository } from "./MysqlCisternaRepository";

export const mysqlCisternaRepository=new MysqlCisternaRepository();
export const sendLevelUseCase= new SendLevel(mysqlCisternaRepository);
export const sendLevelController=new SendLevelController(sendLevelUseCase);