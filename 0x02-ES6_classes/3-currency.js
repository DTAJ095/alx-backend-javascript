export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // setter for code
  set code(newCode) {
    if (Object.getPrototypeOf(newCode) !== String.prototype) {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // setter for name
  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  //getter for code
  get code() {
    return this._code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}