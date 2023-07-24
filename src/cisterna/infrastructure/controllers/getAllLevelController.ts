import { Request, Response } from "express";
import { GetAllLevel } from "../../application/getAllLevelUseCase";

export class GetAllLevelsController {
  constructor(readonly getAllLevelUseCase: GetAllLevel) {}

  async run(req: Request, res: Response) {
    try {
      const levels= await this.getAllLevelUseCase.run();
      console.log({levels});
      if (levels)
        res.status(200).send({
          status: "success",
          data: levels.map((el: any) => {
            return {
              id: el.id,
              nivel: el.nivel,
              fecha: el.fecha,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}