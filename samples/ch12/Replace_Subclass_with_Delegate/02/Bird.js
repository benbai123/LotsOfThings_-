
class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  get name() {
    return this._name;
  }
  get plumage() {
    return this._speciesDelegate._plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }

  selectSpeciesDelegate(data) {
    switch(data.type) {
      case 'EuropeanSwallow': return new EuropeanSwallowDelegate(data, this);
      case 'AfricanSwallow': return new AfricanSwallowDelegate(data, this);
      case 'NorwegianBlueParrot': return new NorwegianBlueParrotDelegate(data, this);
      default: return new SpeciesDelegate(data, this);
    }
  }
}
