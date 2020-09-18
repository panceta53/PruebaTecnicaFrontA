"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuarioRutas_1 = __importDefault(require("./rutas/usuarioRutas"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.rutas();
    }
    settings() {
        this.app.set('port', this.port || 3000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    rutas() {
        this.app.use(usuarioRutas_1.default);
    }
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('conectado al puerto: ', this.app.get('port'));
    }
}
exports.default = App;
