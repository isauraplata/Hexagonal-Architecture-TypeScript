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
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../database/mysql");
const userModel_1 = require("../domain/userModel");
class MysqlUserRepository {
    createUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
            const params = [name, email, password];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new userModel_1.User(result.insertId, name, email, password);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
