import { any, number } from "joi";
import jwt  from "jsonwebtoken";
import { Request, Response } from "express";
import express from "express"


const auth=(req:Request,res:Response,next:express.NextFunction)=>{

    const token=req.header("x-access-token")
    if(!token){
        return res.status(403).json({error:true,message:"Access token provided"})
    }

    try {
        const key:any=process.env.ACCESS_TOKEN_PRIVATE_KEY
        const tokenDetails=jwt.verify(token,key);
        //req.body=tokenDetails
        next();
    } catch (error) {
        res.status(403).json({error:true,message:"Invalid token"});
    }
}

export default auth;