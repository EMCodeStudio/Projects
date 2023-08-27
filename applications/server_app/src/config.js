import { config } from 'dotenv'

//Funcion que se ejecuta para cargar las variables de entorno definidas en archivos .env
config()

//Asignamos la variable de entorno definida en el archivo .env
const PORT_ENV = process.env.DEFAULT_PORT
// En caso de que no se asigne el valor de la variable de entorno asignamos este valor
const PORT_DEV = 3000

//Exportamos las constantes para usarlas en el index 
export { PORT_ENV, PORT_DEV }

