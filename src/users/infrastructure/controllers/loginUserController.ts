import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import { Login } from "../../application/loginUSeCase";
import { loginBodyValidation } from "../utils/validationSchema";
import { any, string } from "joi";
import genertateTokens from "../utils/generateToke";

export class LoginController {
  constructor(readonly loginUseCase: Login) {}

  async run(req: Request, res: Response) {
    
    try {
      const {error}=loginBodyValidation(req.body);
      if(error)
      return res.status(400).json({error: error,message:error.details[0].message});

      const userFind= await this.loginUseCase.run(req.body.email,req.body.password)
       if(!userFind){
        console.log("no lo encontroo, ni modos pa")
        return res.status(401).json({error:true,message:"Invalid email or password"});
       }
       const {password} :any = userFind
      console.log(password)



      const verifiedPassword= await bcrypt.compare(req.body.password,password) 

       if(!verifiedPassword) return res.status(401).json({error:true,message:"Invalid password"});


        //generate access and token
     const {accessToken}=await genertateTokens(userFind);
     res.status(200).json({
       error:false,
       accessToken,
       message:"Logged in successfully"
     });

      
      
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}