import nodemailer from "nodemailer";
import { template } from "./template";

const sendInformation= async()=>{
  const config={
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "isauraplatarojas@gmail.com",
      pass: "kbjbvcjszajcdrge"
    }
  }
  const message = {
    from:"isauraplatarojas@gmail.com",
    to:"yam778123@gmail.com",
    subject:"AquaTechs",
    html:template
  }
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(message)
  console.log(info);
}


export default sendInformation;
