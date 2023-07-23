import express from "express";
import { createUserController } from "./dependencies";
import { loginUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post("/registro",createUserController.run.bind(createUserController))

userRouter.post("/login",loginUserController.run.bind(loginUserController))

