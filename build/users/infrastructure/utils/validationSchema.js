"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginBodyValidation = exports.signUpBodyValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_password_complexity_1 = __importDefault(require("joi-password-complexity"));
const signUpBodyValidation = (body) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required().label("Name"),
        email: joi_1.default.string().email().required().label("Email"),
        password: (0, joi_password_complexity_1.default)().required().label("Password"),
    });
    return schema.validate(body);
};
exports.signUpBodyValidation = signUpBodyValidation;
const loginBodyValidation = (body) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().label("Email"),
        password: (0, joi_password_complexity_1.default)().required().label("Password"),
    });
    return schema.validate(body);
};
exports.loginBodyValidation = loginBodyValidation;
/* export const refreshTokenValidation=(body)=>{
    const schema=Joi.object({
        refreshToken:Joi.string().required().label("refresh Token"),
       
    })
    return schema.validate(body)
} */ 
