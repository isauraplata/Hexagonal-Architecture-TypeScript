import express from "express";

import { sendLevelController } from "./dependencies";

export const cisternaRouter = express.Router();
cisternaRouter.post("/",sendLevelController.run.bind(sendLevelController))