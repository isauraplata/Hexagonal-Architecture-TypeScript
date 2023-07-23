import {query} from "../../database/mysql";
import { User } from "../../users/domain/userModel";
import { Rotoplas } from "../domain/rotoplasModel";
import { RotoplasRepository } from "../domain/rotoplasRepository";

export class MysqlRotoplasRepository implements RotoplasRepository {

  async getAll(): Promise<Rotoplas[] | null> {
    const sql = "SELECT * FROM rotoplas";
    try {
      const [data]: any = await query(sql, []);
      const dataStatus = Object.values(JSON.parse(JSON.stringify(data)));

      return dataStatus.map(
        (el: any) =>
          new Rotoplas(
            el.id,
            el.fecha,
            el.fecha,
            el.servicio
          )
      );
    } catch (error) {
      return null;
    }
  }

 /*  async findUser(numero_servicio: number): Promise<User | null> {
    const sql =
    "SELECT * FROM user WHERE numero_servicio= ?";
    const params: any[] = [numero_servicio];
  try {
    const [result]: any = await query(sql, params);
  
    return new User(result.insertId,result.name,result.email,result.password,result.numero_servicio);
  } catch (error) {
    return null;
  }
  } */


  async findUser(numero_servicio: number): Promise<User | null> {
    return null;
  }

  async sendStaus(nivel:number,servicio:number): Promise<Rotoplas | null> {
    const nowDate = new Date();

    console.log(servicio)
    const sql =
    "INSERT INTO rotoplas (nivel,create_at,numero_servicio) VALUES (?,?,?)";
    const params: any[] = [nivel,nowDate,servicio];
  try {
    const [result]: any = await query(sql, params);
    return new Rotoplas(result.insertId,nivel,nowDate,servicio);
    
  } catch (error) {
    console.log("errorrr")
    console.log(error)
    return null;
  }
  }

}