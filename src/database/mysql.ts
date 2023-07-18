import dotenv from "dotenv";
import mysql from "mysql2/promise";
//import { Signale } from "signale";

dotenv.config();
//const signale = new Signale();

/* const config = {
  host: process.env.DB_HOST || "52.206.121.98",
  user: process.env.DB_USER || "valiep",
  database: process.env.DB_DATABASE || "corte3integrador",
  password: process.env.DB_PASSWORD || "valiep",
  waitForConnections: true,
  connectionLimit: 10,
}; */

const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_DATABASE || "corte3integrador",
  password: process.env.DB_PASSWORD || "1234",
  waitForConnections: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]) {
  try {
    const conn = await pool.getConnection();
    //signale.success("Conexión exitosa a la BD");
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    //signale.error(error);
    return null;
  }
}