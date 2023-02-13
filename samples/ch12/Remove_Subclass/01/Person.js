
class Person {
	constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return 'M' === this._genderCode;
  }
  get isFemale() {
    return 'F' === this._genderCode;
  }
}
