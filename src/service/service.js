const dbPeticion = {}
const dbUsuarios = require('../database/usuario.js')
dbPeticion.obtenerUsuarios = function() {
	const usuarios = dbUsuarios.obtenerUsuarios()
	return usuarios
}

module.exports = dbPeticion