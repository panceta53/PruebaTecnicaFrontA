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
const conexion_1 = __importDefault(require("../conexion/conexion"));
class usuarioModel {
    constructor() { }
    verUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("desde el modelo");
            const connect = conexion_1.default();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield connect).query(`SELECT * FROM usuario`, (error, result) => {
                    console.log(result);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                });
            }));
        });
    }
    crearUsuario(nombre, apellido, correo, telefono, direccion) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                direccion: direccion
            };
            const connect = conexion_1.default();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield connect).query('INSERT INTO usuario set ?', [datos]).then((result) => {
                    resolve({
                        respuesta: result
                    });
                }, (error) => {
                    reject({
                        respuesta: error
                    });
                });
            }));
        });
    }
    editarUsuario(id, nombre, apellido, correo, telefono, direccion) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                direccion: direccion
            };
            const connect = conexion_1.default();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield connect).query(`UPDATE usuario set ? WHERE usuario.usuario_id = ${id}`, [datos]).then((result) => {
                    resolve({
                        respuesta: result
                    });
                }, (error) => {
                    reject({
                        respuesta: error
                    });
                });
            }));
        });
    }
    eliminarUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connect = conexion_1.default();
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield connect).query(`DELETE FROM usuario  WHERE usuario.usuario_id = ${id}`, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                });
            }));
        });
    }
}
const usModel = new usuarioModel();
exports.default = usModel;
