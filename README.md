# Project DRESS_STORE
# Author: Estiven Morelos Cabarcas (estivenmorelos@hotmail.com)

# Website for online sale of clothing

# What includes?

1. Registration and Login
2. Edit profile
3. Product List
4. Category Selection
5. Search by Names
6. Filtering by Subcategories and Prices
7. Add products to cart and Favorites
8. Place Orders and Pay online
9. View Purchases and their Tracking Statuses
10. Shipping tracking on Map
11. Advisory Chat


# Main Technologies 

## TurboRepo, Javascript, Express, NodeJS, JWT, MongoDB, Vite + React, Shacdcn.

# Installing and Setting Monorepo Projects Web Applications

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
    "start": "node applications/server_app/src/index.js"
  },
### Adding Workspaces Option
-  "workspaces":[
    "applications/*"
  ],


## Installations and Setting Server App (applications/server_app)
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

## Installing and Setting Turborepo (root)
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
### Adding Proxy Into Plugins (client_app/vite.config.json)
-  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin: true
      }
    }
  }


## Installing and Setting Serve Static (server_app)
### Installing (root):
- npm i express --workspace server_app
- npm i nodemon -D --workspace server_app
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

## Error Num-1:
failed to contact turbod. Continuing in standalone mode: connection to t
        To quickly resolve the issue, try running:
        - $ turbo daemon clean

        To debug further - please ensure the following:
        - the process identified by the pid in the file at C:\Users\HP_230LA\AppDabod.pid is not running, and remove C:\Users\HP_230LA\AppData\Local\Temp\turbod\c6e
        - check the logs at C:\Users\HP_230LA\AppData\Roaming\turborepo\data\logs\
        - the unix domain socket at C:\Users\HP_230LA\AppData\Local\Temp\turbod\c6ed

        You can also run without the daemon process by passing --no-daemon

### Solution package (root):
- "scripts": {
    "dev": "turbo dev --no-daemon",
  },


# Back-End Development (server_app)

## Installing Necessary Tools (root):
### For Console
- npm i morgan --workspace server_app
### For Models
- npm i mongoose --workspace server_app
### For URL Servers Compatibility (Not Necessary Here)
 - npm i cors --workspace server_app
### For Validation
- npm i zod --workspace server_app
### For Authentication
- npm i jsonwebtoken --workspace server_app
### For Security + Salting
- npm i bcrypt --workspace server_app
### For Persist Local Token Data
- npm i cookie-parser@latest --workspace server_app
- npm i --save-dev @types/cookie-parser --workspace server_app


## Create Connection to Database (server_app/src)
### Connection (db.js) 
### Import Connection and run the server (index.js) 


