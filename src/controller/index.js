const service = require('../service/service.js')

const crud = {}

crud.informacionInquilinos = async function(req,res) {
	console.log(await service.infoinquilino())
	res.render('infoinquilino')
}
crud.informaccionPropietarios = function(req,res) {
	res.render('infoPripietario')
}
crud.alquiler = function(req,res) {
	res.render('alquiler')
}
crud.contrato = function(req,res) {
	res.render('contrato')
}
crud.cantidadCondominios = function(req,res) {
	
}
crud.pagos = function(req,res) {
	res.send('menu')
}



module.exports = crud