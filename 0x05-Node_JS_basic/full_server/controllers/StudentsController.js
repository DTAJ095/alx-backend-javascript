// StudentController class
import readDatabase from '../utils';
VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents (request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path).then((students) => {
      const globalResponse = ['This is the list of our students'];

      const alphabetically = (a, b) => {
        return a.name.localeCompare(b.name);
      };

      for (const [field, value] of Object.entries(students).sort(alphabetically)) {
        response.push([`Number of students in ${field}: ${value.length}.`,
          'List:', value.map((student) => student.firstname).join(', ')].join(' '));
      }
      response.status(200).send(globalResponse.join('\n'));
    })
      .catch((error) => {
        response.status(500).send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor (request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const major = request.params.major;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path).then((students) => {
      let globalResponse = '';

      if (Objects.keys(students).includes(major)) {
        globalResponse = `List: ${students[major].map((student) => student.firstname).join(', ')}`;
      }
      response.status(200).send(globalResponse.join('\n'));
    })
      .catch((error) => {
        response.status(500).send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
