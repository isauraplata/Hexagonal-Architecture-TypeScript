import { Rotoplas } from "../domain/rotoplasModel";
import { RotoplasRepository } from "../domain/rotoplasRepository";

export class GetAllStatus {
  constructor(readonly rotoplasRepository: RotoplasRepository) {}

  async run(): Promise<Rotoplas[] | null> {
    try {
      const result= await this.rotoplasRepository.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}