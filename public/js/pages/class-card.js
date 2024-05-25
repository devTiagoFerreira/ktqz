import { createClassCard } from "../components/card.js"

export async function createClassCardPage() {
	$('#loader-container').removeClass('hidden')
	$('section').html('')

	const class_list = [
		{ class_id: 1, class_name: 'Jovens', class_year: '2024' }, 
		{ class_id: 2, class_name: 'Adultos', class_year: '2024' },
		{ class_id: 3, class_name: 'Idosos', class_year: '2024' }
	]

	const card_container = $('<div>').addClass('card-container')

	for (const class_item of class_list) {
		const card = createClassCard(class_item)
		card_container.append(card)
	}

		$('section').append(card_container)
    $('#loader-container').addClass('hidden')
}