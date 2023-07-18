import express from "express"
import { config } from "dotenv";
const app =express()
const PORT=process.env.PORT || 4000
import { userRouter } from "./users/infrastructure/UserRouter"
config();
app.use(express.json())


app.listen(PORT,()=>{
    console.log("listening on port"+PORT)
})

app.use("/api",userRouter)



