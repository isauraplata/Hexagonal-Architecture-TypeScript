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
exports.MysqlCisternaRepository = void 0;
const mysql_1 = require("../../database/mysql");
const cisternaModel_1 = require("../domain/cisternaModel");
class MysqlCisternaRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM cisterna";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataStatus = Object.values(JSON.parse(JSON.stringify(data)));
                return dataStatus.map((el) => new cisternaModel_1.Cisterna(el.id, el.nivel, el.create_at));
            }
            catch (error) {
                return null;
            }
        });
    }
    sendLevel(nivel) {
        return __awaiter(this, void 0, void 0, function* () {
            const nowDate = new Date();
            const sql = "INSERT INTO cisterna (nivel, create_at) VALUES (?,?)";
            const params = [nivel, nowDate];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                console.log(nowDate);
                return new cisternaModel_1.Cisterna(result.insertId, nivel, nowDate);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlCisternaRepository = MysqlCisternaRepository;
