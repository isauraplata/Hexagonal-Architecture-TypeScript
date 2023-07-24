import express from "express";

import { sendLevelController } from "./dependencies";
import { getLevelController } from "./dependencies";

export const cisternaRouter = express.Router();
cisternaRouter.post("/",sendLevelController.run.bind(sendLevelController))
cisternaRouter.get("/getAll",getLevelController.run.bind(getLevelController))