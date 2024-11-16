import { createClassCardPage } from '../pages/class.js';
import { createStudentPage } from '../pages/student.js';

const NAV_ITEMS = [
    { id: 'class-item', item: 'class', text: 'Turmas', action: createClassCardPage },
    { id: 'student-item', item: 'student', text: 'Catequizandos', action: createStudentPage },
];

export function createHeader() {
    const header = $('<header>');
    const logo = $('<div>').addClass('header-logo').text('K†QZ');
    const nav = createNavBar();

    header.append(logo, nav);

    return header;
}

function createNavBar() {
    const nav = $('<nav>');
    const ul = $('<ul>');

    NAV_ITEMS.forEach(({ id, text, icon }) => {
        const li = $('<li>').attr('id', id);
        const span = $('<span>').text(text);

        li.append(span);
        ul.append(li);
    });

    nav.append(ul);
    return nav;
}

export function setNavEvents() {
    NAV_ITEMS.forEach(({ id, action }) => {
        $(`#${id}`).on('click', async () => {
            await action();
        });
    });
}
