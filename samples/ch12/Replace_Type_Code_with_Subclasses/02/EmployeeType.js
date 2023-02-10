
class EmployeeType {
  constructor(aString) {
    this._value = aString;
  }
  toString() {
    return this._value;
  }

  get capitalizedName() {
    return this.toString().charAt(0).toUpperCase()
      + this.toString().substr(1).toLowerCase();
  }
}