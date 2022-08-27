const {Pool} = require('pg')
const usuarios = {}
const pool = new Pool({
	host:'localhost',
	user:'postgres',
	database:'admicondominios',
	password:'123456'
})
usuarios.infoinquilino = async function() {
	const respuesta = await pool.query('SELECT * FROM infoinquilino')
	return respuesta
}

module.exports = usuarios