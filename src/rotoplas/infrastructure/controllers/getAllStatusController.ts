import { Request, Response } from "express";
import { GetAllStatus } from "../../application/getAllStatusUseCase";

export class GetAllStatusController {
  constructor(readonly getAllStatusUseCase: GetAllStatus) {}

  async run(req: Request, res: Response) {
    try {
      const statuss= await this.getAllStatusUseCase.run();
      console.log({statuss});
      if (statuss)
        res.status(200).send({
          status: "success",
          data: statuss.map((el: any) => {
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
