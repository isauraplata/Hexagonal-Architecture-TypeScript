import express from "express"
import * as dotenv from "dotenv"
import { userRouter } from "./users/infrastructure/UserRouter";
import { rotoplasRouter } from "./rotoplas/infrastructure/rotoplasRouter";
import { cisternaRouter } from "./cisterna/infrastructure/cisternaRouter";
import cors from "cors";
const app =express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port=process.env.PORT_SERVER;
const now = new Date();



app.listen(port,()=>{
    console.log("listening on port: "+port)
    console.log(now);
    
});

app.use("/api/user",userRouter);
app.use("/api/rotoplas",rotoplasRouter);
app.use("/api/cisterna",cisternaRouter);



