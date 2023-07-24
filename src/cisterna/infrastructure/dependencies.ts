import { SendLevel } from "../application/sendLevelUseCase";
import { SendLevelController } from "./controllers/sendLevelController";
import { MysqlCisternaRepository } from "./MysqlCisternaRepository";
import { GetAllLevel } from "../application/getAllLevelUseCase";
import { GetAllLevelsController } from "./controllers/getAllLevelController";


export const mysqlCisternaRepository=new MysqlCisternaRepository();
export const sendLevelUseCase= new SendLevel(mysqlCisternaRepository);
export const sendLevelController=new SendLevelController(sendLevelUseCase);

export const getLevelUseCase= new GetAllLevel(mysqlCisternaRepository);
export const getLevelController= new GetAllLevelsController(getLevelUseCase);