import nodemailer from "nodemailer";
import { template } from "./template";
const createTransporter=()=>{

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASSWORD
        }
      });
    return transport;

}

export const sendMail=async()=>{
 const transporter = createTransporter();
 const info=await transporter.sendMail({

    from:process.env.NODEMAILER_USER,
    to:"yam778123@gmail.com",
    subject:"AquaTech",
    html:template
 });
 console.log("messague ",info.messageId)
 //return 

}