
class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }

  get plumage() {
    if (this._voltage > 100) return 'scorched'; // 燒焦的
    else return this._bird._plumage || 'beautiful';
  }
}
