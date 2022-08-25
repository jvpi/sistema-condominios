const express = require('express')
const router = express.Router()
const controllers =  require('../controller/index.js')

router.get('/',controllers.informacionInquilinos)
// .get('/informacion-inquilinos',controllers.obtenerMenu)
// .get('/informaccion de propietarios',controllers.obtenerMenu)
// .get('/contrato',controllers.obtenerMenu)
// .get('/cantidad-condominios',controllers.obtenerMenu)
// .get('/alquiler',controllers.obtenerMenu)
// .get('/pagos',controllers.obtenerMenu)

module.exports = router