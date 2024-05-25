export async function createPresenceModal(class_id, date) {
    const presence_container = $('<div>').addClass('presence-container');
    const presence_modal = $('<div>').attr('id', 'presence-modal');
    const close_icon = $('<i>').addClass('fa-solid fa-circle-xmark');
    const close_button = $('<button>').addClass('close-button');
    const datapicker = $('<input>').attr('type', 'text').attr('id', 'presence-datepicker').val(date);
    const presence_list = await createPresenceList(class_id, date);
    const save_button = $('<button>').addClass('green-button').text('Salvar');
    const button_area = $('<div>').addClass('button_area');

    close_button.append(close_icon);
    button_area.append(save_button);
    presence_modal.append(datapicker, presence_list, button_area, close_button);
    presence_container.append(presence_modal);

    close_button.on('click', async () => {
        destroyPresenceModal();
    });

    save_button.on('click', async () => {
        savePresenceList(class_id);
    });

    return presence_container;
}

async function createPresenceList(class_id, date) {
    $('#loader-container').removeClass('hidden');
    destroyPresenceList();
    const presence_list = [
        { id: 1, name: 'Tiago Cândido Ferreira', presence: true },
        { id: 2, name: 'Pâmela Aparecida Almeida', presence: true },
        { id: 3, name: 'Marta Lemos de Carvalho Buarque', presence: false },
    ];

    const table = $('<table>').addClass('presence-list');

    for (const { id, name, presence } of presence_list) {
        const tr = $('<tr>');
        const presence_colunm = $('<td>');
        const presence_check = $('<input>').attr('type', 'checkbox').addClass('presence-check').val(id);
        const name_colunm = $('<td>').text(name);

        presence_colunm.append(presence_check);
        tr.append(presence_colunm, name_colunm);
        table.append(tr);
    }
    $('#loader-container').addClass('hidden');
    return table;
}

async function savePresenceList(class_id) {
    const presence_date = $('#presence-datepicker').val();
    const presence_checks = Array.from($('.presence-check'));
    const presence_list = [];
    for (const item of presence_checks) {
        presence_list.push({ student_id: $(item).val(), presence: $(item).prop('checked') });
    }
    const saveData = { data: presence_date, presence_list };
    console.log('Salvando lista de presença...');
}

function destroyPresenceList() {
    $('#presence-modal').find('.presence-list').remove();
}

function destroyPresenceModal() {
    $('.presence-container').remove();
}

export function addDatepicker() {
    $('#presence-datepicker').datepicker({ dateFormat: 'dd/mm/yy' });
}
