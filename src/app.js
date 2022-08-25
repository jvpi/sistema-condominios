const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routerHome = require('./router/index.js')
app.use(routerHome)
app.listen(PORT)