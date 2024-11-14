export async function createAddStudentModal(class_id) {
    const section = $('section');
    const add_student_container = $('<div>').addClass('add-student-container');
    const add_student_modal = $('<div>').attr('id', 'add-student-modal');
    const form = $('<form>').addClass('add-student-form');
    const label_registration_date = $('<label>').attr('for', 'input_registration_date').text('Ano de Cadastro');
    const input_registration_date = $('<input>').attr('type', 'number').attr('id', 'input_registration_date').attr('name', 'input_registration_date');
    input_registration_date.attr('min', '1900').attr('max', '2100').attr('step', '1');
    const date = new Date().getFullYear();
    input_registration_date.val(date);
    const student_filter_button = $('<button>').attr('type', 'button').addClass('green-button').text('Buscar');
    const student_table = createAddStudentList();
    const close_icon = $('<i>').addClass('fa-solid fa-circle-xmark');
    const close_button = $('<button>').addClass('close-button');
    const save_button = $('<button>').addClass('green-button').text('Salvar');
    const button_area = $('<div>').addClass('button_area');

    button_area.append(save_button);
    form.append(label_registration_date, input_registration_date, student_filter_button);
    close_button.append(close_icon);
    add_student_modal.append(student_table, button_area, close_button);
    add_student_container.append(add_student_modal);
    section.append(add_student_container);

    close_button.on('click', async () => {
        destroyAddStudentModal();
    });

    save_button.on('click', async () => {
        saveNewStudentsInClass(class_id);
    });

    const student_list = await searchStudents();

    populationAddStudentList(student_list);

    $('.dt-search')[1].append(form[0]);
}

async function searchStudents() {
    return [
        { id: 1, name: 'Tiago Candido Ferreira', registration_date: '01/03/2024' },
        { id: 2, name: 'Pâmela Aparecida Almeida', registration_date: '02/04/2024' },
        { id: 3, name: 'Maria de Lurdes Rodrigues', registration_date: '01/03/2024' },
        { id: 4, name: 'Ronaldo Fenômeno', registration_date: '01/03/2024' },
    ];
}

async function saveNewStudentsInClass(class_id) {
    const add_student_checks = Array.from($('.add-student-check'));
    const add_student_list = [];
    for (const student of add_student_checks) {
        if ($(student).prop('checked')) {
            add_student_list.push($(student).val());
        }
    }
    const saveData = { add_student_list };
    console.log(`Salvando novos catequizandos de id ${add_student_list.join(',')} da classe de id ${class_id}`);
    destroyAddStudentModal();
}

function destroyAddStudentModal() {
    $('.add-student-container').remove();
}

function createAddStudentList() {
    const table = $('<table>').addClass('display').attr('id', 'add-student-table');
    const thead = $('<thead>');
    const tr = $('<tr>');
    const tbody = $('<tbody>');
    tr.append($('<th>').text(''));
    tr.append($('<th>').text('Nome'));
    tr.append($('<th>').text('Data de Cadastro'));
    thead.append(tr);
    table.append(thead);
    table.append(tbody);
    return table;
}

function populationAddStudentList(student_list) {
    student_list = checkboxAddDefine(student_list);
    $('#add-student-table').DataTable({
        data: student_list,
        columns: [{ data: 'ckeckbox' }, { data: 'name' }, { data: 'registration_date' }],
        paging: false,
        pageLength: student_list.length,
        language: {
            sEmptyTable: 'Nenhum registro encontrado',
            sInfo: '',
            sInfoEmpty: 'Mostrando 0 até 0 de 0 registros',
            sInfoFiltered: '(Filtrados de _MAX_ registros)',
            sInfoPostFix: '',
            sInfoThousands: '.',
            sLengthMenu: 'Mostrar _MENU_ resultados por página',
            sLoadingRecords: 'Carregando...',
            sProcessing: 'Processando...',
            sZeroRecords: 'Nenhum registro encontrado',
            sSearch: '',
            oAria: {
                sSortAscending: ': Ordenar colunas de forma ascendente',
                sSortDescending: ': Ordenar colunas de forma descendente',
            },
            select: {
                rows: {
                    _: 'Selecionado %d linhas',
                    0: 'Nenhuma linha selecionada',
                    1: 'Selecionado 1 linha',
                },
            },
        },
    });
    $('#add-student-table_wrapper input[type="search"]').attr('placeholder', 'Pesquisar');
    $('#add-student-table th:first-child .dt-column-order').remove();
}

function checkboxAddDefine(student_list) {
    return student_list.map((student) => {
        student.ckeckbox = checkboxAddCreate(student.id);
        return student;
    });
}

function checkboxAddCreate(student_id) {
    return ` <input type="checkbox" class="add-student-check" value="${student_id}" /> `;
}
