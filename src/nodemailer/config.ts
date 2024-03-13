import nodemailer from "nodemailer";
import { template } from "./prueba";

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
    to:process.env.NODEMAILER_USER_TO,
    subject:"AquaTech",
    html:template(nivel)
  }
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message)
}

export default sendInformation;
