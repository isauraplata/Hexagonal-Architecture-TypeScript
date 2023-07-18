"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const UserRouter_1 = require("./users/infrastructure/UserRouter");
(0, dotenv_1.config)();
app.use(express_1.default.json());
const privateKey = fs_1.default.readFileSync("/home/ubuntu/privkey.pem");
const certificate = fs_1.default.readFileSync("/home/ubuntu/cert.pem");
app.use("/api", UserRouter_1.userRouter);
https_1.default.createServer({
    key: privateKey,
    cert: certificate,
}, app).listen(PORT);
/* app.listen(PORT,()=>{
    console.log("listening on port"+PORT)
}) */
