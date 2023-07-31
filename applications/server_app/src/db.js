import mongoose from 'mongoose'
// Funcion para establecer la conexion con la base de datos
const connectionDB = async ()=>{
    try {
        // Proporcionamos URL la cual contiene direccion IPv4 o IPv6 para conectar con la BD
       const response = await mongoose.connect('mongodb://127.0.0.1/dress_store_db')
        // Validamos si la conexion tuvo exito y mostramos mensaje
       if(response) console.log('DATABASE CONNECTED!')
    } catch (error) {
        // Si hubo algun fallo en la conexion mostramos el error
        console.log('ERROR DATABASE CONNECTION: ', error)
    }
}
export default connectionDB