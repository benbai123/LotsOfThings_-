
class NorwegianBlueParrot {
  constructor(data) {
  	super(data);
  	// 電壓！？
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) return 'scorched'; // 燒焦的
    else return this._plumage || 'beautiful';
  }
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
}
