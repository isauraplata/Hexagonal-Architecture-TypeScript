import { Cisterna } from "../domain/cisternaModel";
import { CisternaRepository } from "../domain/cisternaRepository";

export class SendLevel{
  constructor(readonly cisternaRepository: CisternaRepository) {}

  async run(
    nivel: number
  ): Promise<Cisterna | null> {
    try {
      const cisterna= await this.cisternaRepository.sendLevel(nivel);
      return cisterna;
    } catch (error) {
      return null;
    }
  }
}