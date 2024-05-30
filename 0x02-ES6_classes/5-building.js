export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // getter for sqft
  get sqft() {
    if (Object.getPrototypeOf(this._sqft) !== Number.prototype) {
      throw TypeError('Sqft must be a number');
    }
    return this._sqft;
  }
}
