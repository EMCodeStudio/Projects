
import app from './app.js'
import connectionDB from './db.js'
// Ejecutamos la conexion apenas inicie la app
connectionDB()
// Si no definimos en puerto utilizara el que agregamos a la variable de entorno
const port = process.env.PORT || 3000
//Ejecutamos el servidor, escuchamos el puerto y damos respuesta de la funcion callback
app.listen(port, () => {
    console.log('SERVER ON PORT: ', port)
})