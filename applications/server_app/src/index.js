
import app from './app.js'
import { PORT_ENV, PORT_DEV} from './config.js'
import connectionDB from './db.js'

// Ejecutamos la conexion cuando inicie la app
connectionDB()
// Si no definimos puerto en la variable de entorno utilizara el que agregamos en config
const port = PORT_ENV || PORT_DEV
//Ejecutamos el servidor, escuchamos el puerto y damos respuesta en la funcion 
app.listen(port, () => {
    console.log('SERVER ON PORT: ', port)
})