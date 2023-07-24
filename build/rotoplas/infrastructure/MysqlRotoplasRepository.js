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
exports.MysqlRotoplasRepository = void 0;
const mysql_1 = require("../../database/mysql");
const rotoplasModel_1 = require("../domain/rotoplasModel");
class MysqlRotoplasRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM rotoplas";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataStatus = Object.values(JSON.parse(JSON.stringify(data)));
                return dataStatus.map((el) => new rotoplasModel_1.Rotoplas(el.id, el.nivel, el.create_at));
            }
            catch (error) {
                return null;
            }
        });
    }
    sendStaus(nivel) {
        return __awaiter(this, void 0, void 0, function* () {
            const nowDate = new Date();
            const sql = "INSERT INTO rotoplas (nivel,create_at) VALUES (?,?)";
            const params = [nivel, nowDate];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new rotoplasModel_1.Rotoplas(result.insertId, nivel, nowDate);
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.MysqlRotoplasRepository = MysqlRotoplasRepository;
