import { createClassDataPage } from '../pages/class-data.js';

export function createClassCard({ class_id, class_name, class_year, class_teacher }) {
    const card_box = $('<div>').addClass('card-box');
    const card_body = $('<div>').addClass('card-body');
    const card = $('<div>').addClass('card');
    const card_bg = $('<div>').addClass('card-bg');
    const card_date_box = $('<div>').addClass('card-date-box');
    const card_date = $('<span>').addClass('card-date').text(class_year);
    const card_title = $('<div>').addClass('card-title').text(class_name);
    const card_teacher = $('<div>').addClass('card-teacher').text(class_teacher);

    card_date_box.append(card_date);
    card.append(card_bg, card_date_box, card_title, card_teacher);
    card.on('click', async () => {
        await createClassDataPage({ class_id, class_name, class_year });
    });
    card_body.append(card);
    card_box.append(card_body);
    return card_box;
}
