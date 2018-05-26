class CatClass {
  constructor() {
    if (this.constructor === CatClass) {
      throw new TypeError('Cannot instantiate abstract class \'CatClass\'');
    }
    if (this.color === undefined) {
      throw new TypeError('\'color\' not defined');
    }
    if (this.defaultMove === undefined) {
      throw new TypeError('\'defaultMove\' not defined');
    }
  }
}

class Charisma extends CatClass {
  constructor() {
    this.color = 'yellow'; //change to constant yellow value
  }
}
