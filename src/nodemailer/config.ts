import nodemailer from "nodemailer";
import { prueba } from "./prueba";

const sendInformation= async(nivel:number)=>{
  const config={
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
    }
  }
  const message = {
    from:process.env.NODEMAILER_USER,
    to:"yam778123@gmail.com",
    subject:"AquaTech",
    html:prueba(nivel)
  }
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message)
  console.log(info);
}


export default sendInformation;
