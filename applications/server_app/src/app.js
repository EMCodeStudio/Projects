
import express from 'express'
import fileURLToPath, { dirname } from 'path'
import serveStatic from 'serve-static'
import favicon from 'serve-favicon'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(serveStatic(path.join(__dirname, '../..', 'client_app', 'dist')))
app.use(favicon(path.join(__dirname, '../public', 'icons/favicon.ico')))

app.get('/api', (req, res) => {
    res.send('Hello Server App!')
})

app.use(express.join())

export default app