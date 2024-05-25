import { createClassCardPage } from '../pages/class-card.js';

export function createAddClassModal() {
    const add_class_container = $('<div>').addClass('add-class-container');
    const add_class_modal = $('<div>').attr('id', 'add-class-modal');

    const form = $('<form>').addClass('add-class-form');
    const input_class_name = $('<input>').attr('type', 'text').attr('id', 'input_class_name');
    const input_class_date = $('<input>').attr('type', 'number').attr('id', 'input_class_date');
    input_class_date.attr('min', '1900').attr('max', '2100').attr('step', '1');
    const close_icon = $('<i>').addClass('fa-solid fa-circle-xmark');
    const close_button = $('<button>').addClass('close-button');
    const save_button = $('<button>').addClass('green-button disabled').attr('id', 'save-new-class-buttom').text('Salvar');
    const button_area = $('<div>').addClass('button_area');

    close_button.append(close_icon);
    button_area.append(save_button);
    const date = new Date().getFullYear();
    input_class_date.val(date);
    form.append(input_class_name, input_class_date);
    add_class_modal.append(form, button_area, close_button);
    add_class_container.append(add_class_modal);

    close_button.on('click', async () => {
        destroyAddClassModal();
    });

    input_class_name.on('input', async () => {
        const class_name = $('#input_class_name').val();
        const save_button = $('#save-new-class-buttom');
        if (!class_name) save_button.prop('disabled', true).addClass('disabled');
        else save_button.prop('disabled', false).removeClass('disabled');
    });

    save_button.on('click', async () => {
        await saveNewClass();
    });

    return add_class_container;
}

async function saveNewClass() {
    const class_name = $('#input_class_name').val();
    const class_date = $('#input_class_date').val();
    console.log(`Salvando nova Turma de nome ${class_name} ${class_date}...`);
    await createClassCardPage();
}

function destroyAddClassModal() {
    $('.add-class-container').remove();
}
