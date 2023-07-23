import { query } from "../../database/mysql";
import { Cisterna } from "../domain/cisternaModel";
import { CisternaRepository } from "../domain/cisternaRepository";

export class MysqlCisternaRepository implements CisternaRepository {
  async sendLevel(nivel: number): Promise<Cisterna | null> {
    const nowDate = new Date();
    const sql = "INSERT INTO cisterna (nivel, create_at) VALUES (?,?)";
    const params: any[] = [nivel, nowDate];
    try {
      const [result]: any = await query(sql, params);
      console.log(nowDate);
      return new Cisterna(result.insertId, nivel, nowDate);
    } catch (error) {
      return null;
    }
  }
}
