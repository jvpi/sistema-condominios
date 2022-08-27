const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routerHome = require('./router/index.js')
const path = require('path')

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routerHome)

app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT)