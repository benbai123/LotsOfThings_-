
class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this.type = type;
  }

  // 為什麼驗證不移到 EmployeeType？
  validateType(arg) {
    if (!['engineer', 'manager', 'salesman'].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }

  // 為什麼不用 get type() ?
  get typeString() {
  	return this._type.toString();
  }
  get type() {
  	return this._type;
  }
  // 疑問：不用 validate?
  set type(arg) {
  	this._type = new EmployeeType(arg);
  }
  // 疑問：首字大寫其它字應該不用轉小寫？
  get capitalizedType() {
  	return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
  }
  toString() { return `${this._name} (${this.capitalizedType})`; }
}
