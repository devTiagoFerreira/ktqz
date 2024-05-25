import { createHeader, setNavEvents } from '../components/hearder.js';
import { createClassCardPage } from './class-card.js';

document.addEventListener('DOMContentLoaded', async () => {
	createMainContainer()
	await createClassCardPage()
})

function createMainContainer () {
	const main_container = $('#main-container')

	const loader = createLoader()
	const header = createHeader();
	const section = $('<section>')

	main_container.append(loader, header, section)

	setNavEvents()
}

function createLoader () {
	const loader_container = $('<div>').attr('id', 'loader-container').addClass('hidden')
	const loader = $('<div>').addClass('loader')

	loader_container.append(loader)

	return loader_container
}

