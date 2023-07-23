import { Request, Response } from "express";
import { FindUser } from "../../application/findUserUseCase";

export class FindUserController {
  constructor(readonly findUserUseCase: FindUser) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const findUser= await this.findUserUseCase.run(data.numero_servicio)
      if (findUser)
        res.status(201).send({
          status: "success",
          data: {
            email: findUser?.email,
            numeroServicio: findUser?.numero_servicio
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