window.addEventListener('DOMContentLoaded', () => {
	let ibg = document.querySelectorAll('.ibg')
	ibg.forEach(el => {
		let srcAttr = el.firstElementChild.getAttribute('src');
		el.style.backgroundImage = `url('./${srcAttr}')`
	})
	document.querySelector('.sidebar__close').addEventListener('click', () => {
		document.querySelector('.sidebar').classList.toggle('hidden')
		if (document.querySelector('.sidebar p').innerHTML == 'открыть') {
			document.querySelector('.sidebar p').innerHTML = 'свернуть'
		}
		else {
			document.querySelector('.sidebar p').innerHTML = 'открыть'
		}

	})
	info()
	function info() {
		if (document.documentElement.clientWidth < 500) {
			document.querySelector('.information__title').innerText = 'инфо';
		}
	}
	document.querySelector('.about__button').addEventListener('click', () => {
		document.querySelector('.about__item > p').classList.toggle('visible')
	})
})