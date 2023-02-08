
class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesman'].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }

  get type() {
  	return this._type;
  }
  // 疑問：不用 validate?
  set type(arg) {
  	this._type = arg;
  }
  // 疑問：首字大寫其它字應該不用轉小寫？
  get capitalizedType() {
  	return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
  }
  toString() { return `${this._name} (${this.capitalizedType})`; }
}
