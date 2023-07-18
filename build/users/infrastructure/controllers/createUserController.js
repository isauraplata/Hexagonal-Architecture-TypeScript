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
exports.CreateUserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const validationSchema_1 = require("../utils/validationSchema");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const { error } = (0, validationSchema_1.signUpBodyValidation)(req.body);
                if (error)
                    return res.status(400).json({ error: error, message: error.details[0].message });
                //const salt= await bcrypt.genSalt(Number(process.env.SALT));
                const salt = yield bcrypt_1.default.genSalt(Number(10));
                const hashPassword = yield bcrypt_1.default.hash(req.body.password, salt);
                const user = yield this.createUserUseCase.run(data.name, data.email, hashPassword);
                console.log("imprimiendo user onjecto creado" + user);
                /* const token= jwt.sign({id:idUser},SECRET.SECRET,{
                  expiresIn:86400 //24 hrs
                }) */
                if (user)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: user === null || user === void 0 ? void 0 : user.id,
                            name: user === null || user === void 0 ? void 0 : user.name,
                            email: user === null || user === void 0 ? void 0 : user.email,
                            password: user === null || user === void 0 ? void 0 : user.password,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
