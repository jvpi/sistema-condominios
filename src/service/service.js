const dbPeticion = {}
const dbCondominios = require('../database/usuario.js')
dbPeticion.infoinquilino = async function() {
	const respuesta  = await dbCondominios.infoinquilino()
	return respuesta
}

module.exports = dbPeticion