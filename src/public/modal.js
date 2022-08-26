function abrirModal() {
	const btn = document.getElementById('btn-abrir')
	const form = document.getElementById('form')
	btn.addEventListener('click',function() {
		form.style.display = 'block'
	})
}
abrirModal()
function cerrarModal() {
	const btn = document.getElementById('btn-cerrar')
	const form = document.getElementById('form')
	btn.addEventListener('click',function() {
		form.style.display = 'none'
	})
}

cerrarModal()