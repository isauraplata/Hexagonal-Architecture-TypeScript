import { RotoplasRepository } from "../domain/rotoplasRepository";
import { User } from "../../users/domain/userModel";

export class FindUser{
  constructor(readonly rotoplasRepository: RotoplasRepository) {}
  async run(
    numero_servicio: number
  ): Promise<User | null> {
    try {
      const userFind= await this.rotoplasRepository.findUser(numero_servicio)
      return userFind;
    } catch (error) {
      return null;
    }
  }
}