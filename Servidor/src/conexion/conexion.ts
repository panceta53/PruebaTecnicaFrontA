// import mysql from 'promise-mysql'
// import MysqlError from 'mysql'
import { createPool } from 'mysql2/promise'

export default async function connect(){

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pruebat',
        connectionLimit: 10
    })
    return connection
}
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