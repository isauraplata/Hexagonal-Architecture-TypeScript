import { Cisterna } from "../domain/cisternaModel";

export interface CisternaRepository {
  sendLevel(
    nivel: number
  ): Promise<Cisterna | null>;
  getAll(): Promise<Cisterna[] | null>;
}