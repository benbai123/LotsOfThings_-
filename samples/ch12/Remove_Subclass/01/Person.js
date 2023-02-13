
class Person {
	constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    // 只是中間步驟，否則形成循環依賴
    return this instanceof Male;
  }
}
