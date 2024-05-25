import { createClassCard } from '../components/card.js';
import { createAddClassModal } from '../components/add-class-modal.js';

export async function createClassCardPage() {
    $('#loader-container').removeClass('hidden');
    const section = $('section');
    section.html('');

    const class_list = [
        { class_id: 1, class_name: 'Jovens', class_year: '2024' },
        { class_id: 2, class_name: 'Adultos', class_year: '2024' },
        { class_id: 3, class_name: 'Idosos', class_year: '2024' },
    ];

    const card_container = $('<div>').addClass('card-container');

    const plus_icon = $('<i>').addClass('fa-solid fa-circle-plus');
    const add_class_button = $('<button>').attr('type', 'button').addClass('add-class-buttom');

    for (const class_item of class_list) {
        const card = createClassCard(class_item);
        card_container.append(card);
    }

    add_class_button.append(plus_icon);
    card_container.append(add_class_button);

    section.append(card_container);

    add_class_button.on('click', async () => {
        const add_class_modal = createAddClassModal();
        section.append(add_class_modal);
    });

    $('#loader-container').addClass('hidden');
}
