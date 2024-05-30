import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call constructor of parent class (Building)
    super(sqft);
    this._floors = floors;
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // getter for floors
  get floors() {
    if (Object.getPrototypeOf(this._floors) !== Number.prototype) {
      throw TypeError('Floors must be a number');
    }
    return this._floors;
  }

  // Override method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
