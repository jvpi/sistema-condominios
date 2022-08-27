const express = require('express')
const router = express.Router()
const controllers =  require('../controller/index.js')

router.get('/',controllers.informacionInquilinos)
.get('/informacion-inquilinos',controllers.informacionInquilinos)
.get('/informaccion-propietarios',controllers.informaccionPropietarios)
.get('/contrato',controllers.contrato)
//.get('/cantidad-condominios',controllers.obtenerMenu)
.get('/alquiler',controllers.alquiler)
// .get('/pagos',controllers.obtenerMenu)

module.exports = router