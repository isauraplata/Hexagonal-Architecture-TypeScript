import { Request, Response } from "express";
import { SendStatus } from "../../application/sendStatusUseCase";

export class SendStatusController {
  constructor(readonly sendStatusUseCase: SendStatus) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const rotoplas = await this.sendStatusUseCase.run(data.nivel,data.servicio);

      if (rotoplas)
        res.status(201).send({
          status: "success",
          data: {
            nivel: rotoplas?.nivel,
            fecha: rotoplas?.fecha,
            servicio:rotoplas?.servicio
          },
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
