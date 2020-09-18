"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioControllers_1 = __importDefault(require("../controllers/usuarioControllers"));
class usuarioRutas {
    constructor(rutas = express_1.Router()) {
        this.rutas = rutas;
        this.usu = new usuarioControllers_1.default();
        this.listar();
        this.crear();
        this.editar();
        this.eliminar();
    }
    listar() {
        this.rutas.get('/listar', this.usu.listar);
    }
    crear() {
        this.rutas.post('/crear', this.usu.crear);
    }
    editar() {
        this.rutas.post('/editar', this.usu.editar);
    }
    eliminar() {
        this.rutas.post('/eliminar', this.usu.eliminar);
    }
    getRoutes() {
        return this.rutas;
    }
}
const rutas_ = new usuarioRutas();
const UsuRut = rutas_.getRoutes();
exports.default = UsuRut;
