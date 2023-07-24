import { Cisterna } from "../domain/cisternaModel";
import { CisternaRepository } from "../domain/cisternaRepository";

export class GetAllLevel {
  constructor(readonly cisternaRepository: CisternaRepository) {}

  async run(): Promise<Cisterna[] | null> {
    try {
      const result= await this.cisternaRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}