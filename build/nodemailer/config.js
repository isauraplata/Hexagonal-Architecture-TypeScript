"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const prueba_1 = require("./prueba");
const sendInformation = (nivel) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD
        }
    };
    const message = {
        from: process.env.NODEMAILER_USER,
        to: "yam778123@gmail.com",
        subject: "AquaTech",
        html: (0, prueba_1.prueba)(nivel)
    };
    const transport = nodemailer_1.default.createTransport(config);
    const info = yield transport.sendMail(message);
    console.log(info);
});
exports.default = sendInformation;
