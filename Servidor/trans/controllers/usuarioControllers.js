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
const usuarioModel_1 = __importDefault(require("../models/usuarioModel"));
class usuarioController {
    constructor() { }
    listar(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado;
            try {
                resultado = yield usuarioModel_1.default.verUsuarios();
                res.status(200).json({
                    info: resultado
                });
            }
            catch (error) {
                res.status(200).json({
                    info: error
                });
            }
        });
    }
    crear(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado;
            const datos = req.body;
            try {
                console.log(datos);
                resultado = yield usuarioModel_1.default.crearUsuario(datos.nombre, datos.apellido, datos.correo, datos.telefono, datos.direccion);
                res.status(200).json({
                    info: 'usuario creado'
                });
            }
            catch (error) {
                res.status(200).json({
                    info: error
                });
            }
        });
    }
    editar(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado;
            const datos = req.body;
            try {
                console.log(datos);
                resultado = yield usuarioModel_1.default.editarUsuario(datos.usuario_id, datos.nombre, datos.apellido, datos.correo, datos.telefono, datos.direccion);
                res.status(200).json({
                    info: 'usuario editado'
                });
            }
            catch (error) {
                res.status(200).json({
                    info: error
                });
            }
        });
    }
    eliminar(req, res, fun) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado;
            const datos = req.body;
            try {
                console.log(datos);
                resultado = yield usuarioModel_1.default.eliminarUsuario(datos.usuario_id);
                res.status(200).json({
                    info: 'usuario eliminado'
                });
            }
            catch (error) {
                res.status(200).json({
                    info: error
                });
            }
        });
    }
}
exports.default = usuarioController;
