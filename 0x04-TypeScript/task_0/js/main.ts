export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Jaures',
    lastName: 'Alban',
    age: 20,
    location: 'New York'
};
const student2: Student = {
    firstName: 'Georgie',
    lastName: 'Daniels',
    age: 25,
    location: 'Paris'
};

const studentsList: Array<Student> = [student1, student2];
const styleSheet = `
html {
    margin: 0;
    height: 100%;
    padding: 0;
}
body {
    margin: 0;
    height: 100%;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}
table {
    width: 100%;
    border-collapse: collapse;
}
thead {
    background-color: #333;
    color: #fff;
    font-weight: bold;
}
td {
    padding: 10px;
    border: 1px solid #333;
    cursor: pointer;
}
td:hover {
    background-color: #f4f4f4;
}
td:nth-child(1) {
    width: 20%;
    text-align: center;
}
`;

export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);

    for (const student of students) {
        const row = document.createElement('tr');
        row.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        row.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', row);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);  // Display students in a table
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Students List';
