import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Method
  static cloneCar() {
    return new (this.prototype.constructor)();
  }
}
