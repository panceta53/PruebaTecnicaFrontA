import {Router} from 'express'
import usuarioController from '../controllers/usuarioControllers'

class usuarioRutas
{
    private usu: usuarioController = new usuarioController()

    constructor(private rutas = Router())
    {
        this.listar()
        this.crear()
        this.editar()
        this.eliminar()
    }

    public listar()
    {
        this.rutas.get('/listar', this.usu.listar)
    }

    public crear()
    {
        this.rutas.post('/crear', this.usu.crear)
    }

    public editar()
    {
        this.rutas.post('/editar',this.usu.editar)
    }

    public eliminar()
    {
        this.rutas.post('/eliminar',this.usu.eliminar)
    }

    public getRoutes()
    {
        return this.rutas
    }
}

const rutas_: usuarioRutas = new usuarioRutas()
const UsuRut = rutas_.getRoutes()
export default UsuRut