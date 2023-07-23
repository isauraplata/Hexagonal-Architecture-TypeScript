import { Rotoplas } from "../domain/rotoplasModel";
import { RotoplasRepository } from "../domain/rotoplasRepository";

export class SendStatus{
  constructor(readonly rotoplasRepository: RotoplasRepository) {}

  async run(
    nivel: number,
    servicio: number
  ): Promise<Rotoplas | null> {
    try {
      const rotoplas= await this.rotoplasRepository.sendStaus(nivel,servicio);
      return rotoplas;
    } catch (error) {
      return null;
    }
  }
}