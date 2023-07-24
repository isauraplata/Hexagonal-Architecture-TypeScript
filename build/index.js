"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const UserRouter_1 = require("./users/infrastructure/UserRouter");
const rotoplasRouter_1 = require("./rotoplas/infrastructure/rotoplasRouter");
const cisternaRouter_1 = require("./cisterna/infrastructure/cisternaRouter");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT_SERVER;
const now = new Date();
app.listen(port, () => {
    console.log("listening on port: " + port);
    console.log(now.toLocaleString());
});
app.use("/api/user", UserRouter_1.userRouter);
app.use("/api/rotoplas", rotoplasRouter_1.rotoplasRouter);
app.use("/api/cisterna", cisternaRouter_1.cisternaRouter);
