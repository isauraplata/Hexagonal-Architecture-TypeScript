import { Request, Response } from "express";
import { SendLevel } from "../../application/sendLevelUseCase";
export class SendLevelController {
  constructor(readonly sendLevelUseCase: SendLevel) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      if (data.nivel === 100 || data.nivel === 0) {
        const cisterna = await this.sendLevelUseCase.run(data.nivel);
        if (cisterna)
          res.status(201).send({
            status: "success",
            data: {
              nivel: cisterna?.nivel,
              fecha: cisterna?.fecha,
            },
          });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
