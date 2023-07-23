import express from "express";
import { sendStatusController } from "./dependencies";
import { getAllStatusController } from "./dependencies";
export const rotoplasRouter = express.Router();

rotoplasRouter.post("/",sendStatusController.run.bind(sendStatusController));
rotoplasRouter.get("/getAll",getAllStatusController.run.bind(getAllStatusController))

