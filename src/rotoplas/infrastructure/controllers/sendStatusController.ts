import { Request, Response } from "express";
import { SendStatus } from "../../application/sendStatusUseCase";
import sendInformation from "../../../nodemailer/config";
export class SendStatusController {
  constructor(readonly sendStatusUseCase: SendStatus) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      if (data.nivel === 100 || data.nivel === 50 || data.nivel === 15) {
        const rotoplas = await this.sendStatusUseCase.run(data.nivel);
        sendInformation(data.nivel);

        if (rotoplas) {
          res.status(201).send({
            status: "success",
            data: {
              nivel: rotoplas?.nivel,
              fecha: rotoplas?.fecha,
            },
          });
        } else {
          res.status(204).send({
            status: "error",
            data: "Ocurrio un error",
            error: true,
          });
        }
      } else {
        res.status(201).send({
          status: "success",
          error: false,
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
