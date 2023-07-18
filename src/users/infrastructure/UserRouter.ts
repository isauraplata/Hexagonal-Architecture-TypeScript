import express from "express";

/* import { createProductController } from "./dependencies";
import { getAllProductController } from "./dependencies";
import { getByIdProductController } from "./dependencies"; */
import { createUserController } from "./dependencies";
import { loginUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post("/",createUserController.run.bind(createUserController))

userRouter.post("/login",loginUserController.run.bind(loginUserController))

/* productRouter.get(
  "/",
  getAllProductController.run.bind(getAllProductController)
);
productRouter.get(
  "/:id",
  getByIdProductController.run.bind(getByIdProductController)
);
productRouter.post(
  "/",
  createProductController.run.bind(createProductController)
); */