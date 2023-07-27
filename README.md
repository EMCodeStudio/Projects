# Project DressStore
# Author: Estiven MC (estivenmorelos@hotmail.com)


# Setting Monorepo Projects


## Adding and setting Package (root)
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


## Installations and setting server (applications/server_app)
### Adding and setting package
- npm init -y
- "type":"module",
- "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
### Folders (src)
- Controllers
- Models
- Schemas
- Routes
- Middlewares
- Libs
### Files (src)
- app.js
- index.js
- config.js
- db.js



