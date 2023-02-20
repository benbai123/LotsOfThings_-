
class AfricanSwallow {
  constructor(data) {
    super(data);
    // 椰子！
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}
