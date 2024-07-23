// Executing basic javascript with node js
/**
 * logs a message to the console
 * @param {string} message - The message to be displayed
 * @returns {void}
 */
const displayMessage = (message) => {
  console.log(message);
};

/**
 * Exports displayMessage function
 * @module displayMessage
 * @type {function}
 */
module.exports = displayMessage;
