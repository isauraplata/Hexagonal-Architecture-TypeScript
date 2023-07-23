import { User } from "./userModel";

export interface UserRepository {
  createUser(
    name: string,
    email: string,
    password: string,
    numero_servicio: number
  ): Promise<User | null>;
  loginUser(
    email: string,
    password: string,
  ): Promise<string | any>;
}