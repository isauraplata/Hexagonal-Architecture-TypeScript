import { Request, Response } from "express";
import { SendLevel } from "../../application/sendLevelUseCase";

export class SendLevelController {
  constructor(readonly sendLevelUseCase: SendLevel) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const cisterna = await this.sendLevelUseCase.run(data.nivel)

      if (cisterna)
        res.status(201).send({
          status: "success",
          data: {
            nivel: cisterna?.nivel,
            fecha: cisterna?.fecha
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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