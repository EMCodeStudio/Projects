
import express from 'express'
import serveStatic from 'serve-static'
import favicon from 'serve-favicon'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

//Optenemos la ruta actual del directorio
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
//Configuramos el middleware para los archivos estaticos
app.use(serveStatic(path.join(__dirname, '../..', 'client_app', 'dist')))
//Configuramos el middleware para iconos
app.use(favicon(path.join(__dirname, '../public', 'icons/favicon.ico')))
//Definimos una ruta para la API
app.get('/api', (req, res) => {
    res.send('Hello Server App!')
})
//Configuramos el middleware para parsear el JSON
app.use(express.json())
//Exportamos la app para usarla en el index
export default app