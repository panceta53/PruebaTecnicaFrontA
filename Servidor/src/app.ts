import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UsuRut from './rutas/usuarioRutas'

export default class App{

    private app: Application
    constructor(private port?: number | string)
    {
        this.app = express()
        this.settings()
        this.middlewares()
        this.rutas()
    }

    settings()
    {
        this.app.set('port',this.port || 3000)
    }

    middlewares()
    {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(cors())
    }

    rutas()
    {
        this.app.use(UsuRut)
    }

    listen()
    {
        this.app.listen(this.app.get('port'))
        console.log('conectado al puerto: ', this.app.get('port'))
    }
}