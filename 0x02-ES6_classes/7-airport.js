export default class Airport {
  constructor(name, code) {
    if (Object.getPrototypeOf(name) !== String.prototype) {
      throw TypeError('Name must be a string');
    }
    if (Object.getPrototypeOf(code) !== String.prototype) {
      throw TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Method
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
