import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Method
  cloneCar () {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const newCar = new NewObj();
    return newCar;
  }
}
