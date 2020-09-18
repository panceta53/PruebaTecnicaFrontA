import conn from "../conexion/conexion"


class usuarioModel
{

    constructor(){}


    public async verUsuarios() {
        console.log("desde el modelo")
        const connect = conn()
        return new Promise(async (resolve, reject) => {
            (await connect).query(`SELECT * FROM usuario`,(error: any,result :any)=>{
                console.log(result)
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
  

    public async crearUsuario(
        nombre: string,
        apellido: string,
        correo : string,
        telefono: string,
        direccion: string,
    )
    {
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        }
        const connect = conn()
        return new Promise(async (resolve, reject)=>
        {
            (await connect).query('INSERT INTO usuario set ?',[datos]).then((result:Object)=> {
                resolve({
                    respuesta: result
                })
            }, (error: any) => {
                reject({
                    respuesta: error
                })
            }) 

            
        })
    }

    public async editarUsuario(
        id: number,
        nombre: string,
        apellido: string,
        correo : string,
        telefono: string,
        direccion: string,)
    {
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        }
        const connect = conn()
        return new Promise(async (resolve, reject)=>
        {
            (await connect).query(`UPDATE usuario set ? WHERE usuario.usuario_id = ${id}`,[datos]).then((result:Object)=> {
                resolve({
                    respuesta: result
                })
            }, (error: any) => {
                reject({
                    respuesta: error
                })
            }) 
        })
    }

    public async eliminarUsuario(id: number)
    {
        const connect = conn()
        return new Promise(async (resolve, reject)=>
        {
            (await connect).query(`DELETE FROM usuario  WHERE usuario.usuario_id = ${id}`,(error: any,result: any)=>
            {
                if(error)
                {
                    reject(error)
                }
                else
                {
                    resolve(result)
                }
            })
        })
    }
}

const usModel: usuarioModel = new usuarioModel()
export default usModel