const db = require('./db.json')
const usuarios = {}

usuarios.obtenerUsuarios = function() {
	return db.workouts
}

module.exports = usuarios