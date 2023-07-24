import nodemailer from "nodemailer";
import { template } from "./template";

const sendInformation= async()=>{
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
    html:template
  }
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message)
  console.log(info);
}


export default sendInformation;
