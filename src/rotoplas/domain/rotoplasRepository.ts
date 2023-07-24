import { Rotoplas } from "./rotoplasModel";

export interface RotoplasRepository {
  sendStaus(
    nivel: number
  ): Promise<Rotoplas | null>;
  getAll(): Promise<Rotoplas[] | null>;
}