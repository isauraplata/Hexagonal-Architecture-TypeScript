import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { CreateUser } from "../../application/createUserUseCase";
import { signUpBodyValidation } from "../utils/validationSchema";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUser) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const { error } = signUpBodyValidation(req.body);
      if (error)
        return res
          .status(400)
          .json({ error: error, message: error.details[0].message });

      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      //const salt= await bcrypt.genSalt(Number(10));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const user = await this.createUserUseCase.run(
        data.name,
        data.email,
        hashPassword
      );

      if (user)
        res.status(201).send({
          status: "success",
          data: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            password: user?.password,
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
