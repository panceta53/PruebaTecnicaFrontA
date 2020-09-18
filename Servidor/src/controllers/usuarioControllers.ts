import usuarioModel from '../models/usuarioModel'
import { Usuario } from '../interfaz/usuario'
import {Response,Request,NextFunction, response} from 'express'

export default class usuarioController{


    constructor(){}

    public async listar(req: Request, res: Response, fun: Function) {
       let resultado: any
        try {
            resultado = await usuarioModel.verUsuarios()
            res.status(200).json({
                info: resultado
            })
        } catch (error) {
            res.status(200).json({
                info: error
            })
        }
    }

    public async crear(req: Request, res: Response, fun: Function) {
        let resultado: any
        const datos : Usuario = req.body
         try {
             console.log(datos)
            resultado = await usuarioModel.crearUsuario(datos.nombre,datos.apellido, datos.correo, datos.telefono, datos.direccion)
             res.status(200).json({
                 info: 'usuario creado'
             })
         } catch (error) {
             res.status(200).json({
                 info: error
             })
         }
     }

     public async editar(req: Request, res: Response, fun: Function) {
        let resultado: any
        const datos : Usuario = req.body
         try {
             console.log(datos)
            resultado = await usuarioModel.editarUsuario(datos.usuario_id,datos.nombre,datos.apellido, datos.correo, datos.telefono, datos.direccion)
             res.status(200).json({
                 info: 'usuario editado'
             })
         } catch (error) {
             res.status(200).json({
                 info: error
             })
         }
     }

     public async eliminar(req: Request, res: Response, fun: Function) {
        let resultado: any
        const datos : Usuario = req.body
         try {
             console.log(datos)
            resultado = await usuarioModel.eliminarUsuario(datos.usuario_id)
             res.status(200).json({
                 info: 'usuario eliminado'
             })
         } catch (error) {
             res.status(200).json({
                 info: error
             })
         }
     }

}