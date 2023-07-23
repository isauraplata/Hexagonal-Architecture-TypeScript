import { Rotoplas } from "./rotoplasModel";
import { User } from "../../users/domain/userModel";

export interface RotoplasRepository {
  sendStaus(
    nivel: number,
    servicio: number
  ): Promise<Rotoplas | null>;
  findUser(
    numero_servicio: number
  ): Promise<User | null>;
  getAll(): Promise<Rotoplas[] | null>;
}