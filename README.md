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
    "buid":"turbo build",
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
### Installing
- npm install turbo -D
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
### Installing
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
## Installing:
- npm i express --workspace server_app
- npm i nodemon --workspace server_app
- npm i serve-static --workspace server_app
- npm i dotenv --workspace server_app
- npm i serve-favicon --workspace server_app