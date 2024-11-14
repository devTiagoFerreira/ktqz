export async function createStudentPage() {
    const section = $('section')
    section.html('')
    const html = `
        <div className="student-page-container">
            TESTE
        </div>
    `
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
    
    section.append(html)
}
