
import { createClassCardPage } from '../pages/class-card.js';

export function createHeader() {
	const header = $('<header>')
	const logo = $('<div>').addClass('header-logo').text('K†QZ')
	const nav = createNavBar()

	header.append(logo, nav)

	return header
}

function createNavBar() {
	const item_list = [
		{ item: 'class', text: 'Turma', icon: 'fa-solid fa-house-user' },
		{ item: 'student', text: 'Catequisando', icon: 'fa-regular fa-id-card' }
	]

	const nav = $('<nav>')
	const ul = $('<ul>')

	for (const { item, text, icon } of item_list) {
		const li = $('<li>').attr('id', `${item}-item`)
		const i = $('<i>').addClass(icon)
		const span = $('<span>').text(text)

		li.append(i, span)
		ul.append(li)
	}
	
	nav.append(ul);
	return nav
}

export function setNavEvents() {
	$('#class-item').on('click', async () => {
		await createClassCardPage()
	})
}

