const service = require('../service/service.js')

const crud = {}

crud.informacionInquilinos = async function(req,res) {
	console.log(await service.infoinquilino())
	res.send('dsad')
}
crud.informaccionPropietarios = function(req,res) {
	
}
crud.alquiler = function(req,res) {
	
}
crud.contrato = function(req,res) {
	
}
crud.cantidadCondominios = function(req,res) {
	
}
crud.pagos = function(req,res) {
	res.send('menu')
}



module.exports = crud