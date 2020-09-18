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
// import mysql from 'promise-mysql'
// import MysqlError from 'mysql'
const promise_1 = require("mysql2/promise");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'pruebat',
            connectionLimit: 10
        });
        return connection;
    });
}
exports.default = connect;
// export default async function conn()
// {
//     const conexion = await mysql.createPool({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'pruebat',
//         connectionLimit: 10
//     })
//     return conexion
// } 
// class conexion {
//     public BD = mysql.createPool({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '',
//                 database: 'pruebat',
//                 connectionLimit: 10
//     })
//     constructor() {
//         this.conectar()
//     }
//     public async conectar() {
//         (await this.BD).getConnection().then(async connection =>{
//             (await this.BD).releaseConnection(connection)
//         }).catch((err) => {
//             console.log( err)
//         })
//     }
// }
// const conn: conexion = new conexion()
// export default conn.BD
