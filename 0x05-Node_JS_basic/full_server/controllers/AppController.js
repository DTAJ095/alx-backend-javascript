// AppController class
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class
export default AppController;
module.exports = AppController;
