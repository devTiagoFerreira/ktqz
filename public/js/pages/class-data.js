import { createPageTitle } from '../components/page-title.js';
import { createStudentList, populationStudentList } from '../components/student-list.js';
import { createPresenceModal, addDatepicker } from '../components/presence-modal.js';
import { createAddStudentModal } from '../components/add-students-modal.js';

export async function createClassDataPage({ class_id, class_name, class_year }) {
    $('#loader-container').removeClass('hidden');
    const section = $('section');
    section.html('');

    const students = [
        {
            id: 1,
            name: 'Tiago',
            maritalStatus: 'Divorciado',
            sacraments: 'BATISMO',
            missingDocuments: 'IDENTIDADE, BATISMO',
            encounters: 10,
            presence: 8,
            lack: 2,
        },
        {
            id: 2,
            name: 'Pâmela',
            maritalStatus: 'Solteira',
            sacraments: 'BATISMO, EUCARISTIA, CRISMA',
            missingDocuments: '',
            encounters: 10,
            presence: 10,
            lack: 10,
        },
        {
            id: 3,
            name: 'Marta',
            maritalStatus: 'Solteira',
            sacraments: 'BATISMO, EUCARISTIA, CRISMA',
            missingDocuments: '',
            encounters: 10,
            presence: 10,
            lack: 10,
        },
    ];

    const page_title = createPageTitle(`${class_name} ${class_year}`);
    const student_container = $('<div>').addClass('student-container');
    const add_student_button = $('<button>').attr('type', 'button').addClass('yellow-button').text('Novo Catequizando');
    const presence_button = $('<button>').attr('type', 'button').addClass('green-button').text('Lista de Presença');
    const button_area = $('<div>').addClass('button_area');
    const student_list = createStudentList();

    student_container.append(student_list);
    section.append(page_title, student_container);
    button_area.append(add_student_button, presence_button)
    populationStudentList(students);

    $('.dt-search')[0].append(button_area[0]);

    add_student_button.on('click', async () => {
        await createAddStudentModal(class_id);
    });

    presence_button.on('click', async () => {
        const date = new Date().toLocaleDateString('pt-BR');
        const presence_modal = await createPresenceModal(class_id, date);
        section.append(presence_modal);
        addDatepicker();
    });

    $('#loader-container').addClass('hidden');
}
