
class Person {
	constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }

  get isMale() {
    // 只是中間步驟，否則形成循環依賴
    return this instanceof Male;
  }
}
