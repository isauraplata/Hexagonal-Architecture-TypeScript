import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();


/* const config = {
  host: process.env.DB_HOST || "52.206.121.98",
  user: process.env.DB_USER || "valiep",
  database: process.env.DB_DATABASE || "corte3integrador",
  password: process.env.DB_PASSWORD || "valiep",
  waitForConnections: true,
  connectionLimit: 10,
}; */

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
};



const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]) {
  try {
    const conn = await pool.getConnection();
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    return null;
  }
}