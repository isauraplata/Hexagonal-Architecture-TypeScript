import { query } from "../../database/mysql";
import { User } from "../domain/userModel";
import { UserRepository } from "../domain/userRepository";

export class MysqlUserRepository implements UserRepository {
 
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User | null> {
    const sql =
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    const params: any[] = [name, email, password];
    try {
      const [result]: any = await query(sql, params);
      return new User(result.insertId, name, email, password);
    } catch (error) {
      return null;
    }
  }

  async loginUser(email: string,password:string): Promise<string | null> {
    const sql =
      "SELECT * FROM user WHERE email= ?";
    const params: any[] = [email];
    try {
      const [result]: any = await query(sql, params);
      if(result.length ===0){
        console.log("no existe ese user")
       }     
       console.log(result[0])
       return result[0];
    } catch (error) {
      return null;
    }
  }
  


}