import { query } from "../../database/mysql";
import { Rotoplas } from "../domain/rotoplasModel";
import { RotoplasRepository } from "../domain/rotoplasRepository";

export class MysqlRotoplasRepository implements RotoplasRepository {
  async getAll(): Promise<Rotoplas[] | null> {
    const sql = "SELECT * FROM rotoplas";
    try {
      const [data]: any = await query(sql, []);
      const dataStatus = Object.values(JSON.parse(JSON.stringify(data)));

      return dataStatus.map(
        (el: any) => new Rotoplas(el.id, el.nivel, el.create_at)
      );
    } catch (error) {
      return null;
    }
  }

  async sendStaus(nivel: number): Promise<Rotoplas | null> {
    const nowDate = new Date();
    const sql = "INSERT INTO rotoplas (nivel,create_at) VALUES (?,?)";
    const params: any[] = [nivel, nowDate];
    try {
      const [result]: any = await query(sql, params);
      return new Rotoplas(result.insertId, nivel, nowDate);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
