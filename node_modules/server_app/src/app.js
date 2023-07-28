import express from 'express'
import serveStatic from 'serve-static'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import favicon from 'serve-favicon'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(serveStatic(path.join(__dirname, '../..', 'client_app', 'dist')))
app.use(favicon(path.join(__dirname, '../public', 'icons/favicon.ico')))
app.get('/api', (req, res) => {
    res.send('Hello Server App!')
})
app.use(express.json())

export default app