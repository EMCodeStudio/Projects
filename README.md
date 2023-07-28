# Project DressStore
# Author: Estiven MC (estivenmorelos@hotmail.com)

# Installing and Setting Monorepo Projects

## Adding and Setting Package (root)
### Installing
- npm init -y
### Adding Module Option
- "type": "module",
### Adding Scripts 
- "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "turbo dev",
    "build":"turbo build",
    "start": "node applications/server_app/"
  },
### Adding Workspaces Option
-  "workspaces":[
    "applications/*"
  ],


## Installations and Setting Server App(applications/server_app)
### Adding and Setting Package
- npm init -y
- "type":"module",
- "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
### Folders (src)
- Controllers
- Middlewares
- Schemas
- Models
- Routes
- Libs
### Files (src)
- app.js
- index.js
- config.js
- db.js

## Installing and Setting Tuborepo (root)
### Install Node Modules
- npm install
### Installing
- npm i turbo -D
### Create File turbo
- turbo.json
### Add:
- {
    "$schema": "https://turbo.build/schema.json",
    "pipeline": {
        "dev": {
            "cache": false
        },
        "build": {
            "dependsOn": [
                "^build"
            ],
            "outputs": [
                "dist/**"
            ]
        },
        "lint": {}
    }
}

## Installing and Setting Client App (applications)
### Installing (not install node_modules into)
- npx create-vite
### Adding Proxy Into Plugins(client_app/vite.config.json)
-  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin: true
      }
    }
  }


## Installing and Setting Serve Static (server_app)
### Installing:
- npm i express --workspace server_app
- npm i nodemon --workspace server_app
- npm i serve-static --workspace server_app
- npm i serve-favicon --workspace server_app
- npm i dotenv --workspace server_app
### Setting (app.js)
- const __filename = fileURLToPath(import.meta.url)
- const __dirname = dirname(__filename)
- const app = express()
- app.use(serveStatic(path.join(__dirname, '../..', 'client_app', 'dist')))
- app.use(favicon(path.join(__dirname, '../public', 'icons/favicon.ico')))
- app.get('/api', (req, res) => {
    res.send('Hello Server App!')
})
- app.use(express.json())
- export default app
### Setting (index.js)
- const port = process.env.PORT || 3000
- app.listen(port, () => {
    console.log('SERVER ON PORT: ', port)
})
### Create File (.env)
- PORT:4000


## Run Server and Client(root)
### Commands
- npm run dev, 
- npm run build,
- npm run start

