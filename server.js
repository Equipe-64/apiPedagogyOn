const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


const raizRoute = require('./src/routes/raizRoute.js')
const clienteRoute = require('./src/routes/clienteRoute.js')
const dependenteRoute = require('./src/routes/dependenteRoute.js')
const profissionalRoute = require('./src/routes/profissionalRoute.js')
const contratoRoute = require('./src/routes/contratoRoute.js')

raizRoute(app)
clienteRoute(app)
dependenteRoute(app)
profissionalRoute(app)
contratoRoute(app)


const port = process.env.PORT || 3000

app.listen(port)

console.log('Servidor funcionando na porta: ', port)