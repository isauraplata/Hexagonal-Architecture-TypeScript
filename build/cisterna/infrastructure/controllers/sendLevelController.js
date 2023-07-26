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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendLevelController = void 0;
class SendLevelController {
    constructor(sendLevelUseCase) {
        this.sendLevelUseCase = sendLevelUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                if (data.nivel === 100 || data.nivel === 0) {
                    const cisterna = yield this.sendLevelUseCase.run(data.nivel);
                    if (cisterna)
                        res.status(201).send({
                            status: "success",
                            data: {
                                nivel: cisterna === null || cisterna === void 0 ? void 0 : cisterna.nivel,
                                fecha: cisterna === null || cisterna === void 0 ? void 0 : cisterna.fecha,
                            },
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
exports.SendLevelController = SendLevelController;
