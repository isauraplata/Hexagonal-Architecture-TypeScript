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
exports.SendStatusController = void 0;
const config_1 = __importDefault(require("../../../nodemailer/config"));
class SendStatusController {
    constructor(sendStatusUseCase) {
        this.sendStatusUseCase = sendStatusUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                if (data.nivel === 100 || data.nivel === 50 || data.nivel === 15) {
                    const rotoplas = yield this.sendStatusUseCase.run(data.nivel);
                    (0, config_1.default)(data.nivel);
                    if (rotoplas) {
                        res.status(201).send({
                            status: "success",
                            data: {
                                nivel: rotoplas === null || rotoplas === void 0 ? void 0 : rotoplas.nivel,
                                fecha: rotoplas === null || rotoplas === void 0 ? void 0 : rotoplas.fecha,
                            },
                        });
                    }
                    else {
                        res.status(204).send({
                            status: "error",
                            data: "Ocurrio un error",
                            error: true,
                        });
                    }
                }
                else {
                    res.status(201).send({
                        status: "success",
                        error: false,
                    });
                }
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.SendStatusController = SendStatusController;
