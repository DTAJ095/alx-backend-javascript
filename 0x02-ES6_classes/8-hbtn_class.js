export default class HolbertonClass {
  constructor(size, location) {
    if (Object.getPrototypeOf(size) !== Number.prototype) {
      throw TypeError('Size must be a number');
    }
    if (Object.getPrototypeOf(location) !== String.prototype) {
      throw TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Method
  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this._location;
    } else {
      return this._size;
    }
  }
}
