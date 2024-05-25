export function createStudentList() {
    const table = $('<table>').addClass('display').attr('id', 'student-table');
    const thead = $('<thead>');
    const tr = $('<tr>');
    const tbody = $('<tbody>');
    tr.append($('<th>').text('Nome'));
    tr.append($('<th>').text('Estado Cívil'));
    tr.append($('<th>').text('Sacramentos'));
    tr.append($('<th>').text('Documentos Faltantes'));
    tr.append($('<th>').text('Encontros'));
    tr.append($('<th>').text('Presença'));
    tr.append($('<th>').text('Faltas'));
    thead.append(tr);
    table.append(thead);
    table.append(tbody);
    return table;
}

export function populationStudentList(studentsData) {
    $('#student-table').DataTable({
        data: studentsData,
        columns: [{ data: 'name' }, { data: 'maritalStatus' }, { data: 'sacraments' }, { data: 'missingDocuments' }, { data: 'encounters' }, { data: 'presence' }, { data: 'lack' }],
        paging: false,
        pageLength: studentsData.length,
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
    $('#student-table_wrapper input[type="search"]').attr('placeholder', 'Pesquisar');
}
