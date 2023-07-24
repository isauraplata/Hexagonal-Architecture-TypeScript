"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const token = req.header("x-access-token");
    if (!token) {
        return res.status(403).json({ error: true, message: "Access token provided" });
    }
    try {
        const key = process.env.ACCESS_TOKEN_PRIVATE_KEY;
        const tokenDetails = jsonwebtoken_1.default.verify(token, key);
        //req.body=tokenDetails
        next();
    }
    catch (error) {
        res.status(403).json({ error: true, message: "Invalid token" });
    }
};
exports.default = auth;
