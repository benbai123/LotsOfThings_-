
class Employee {
  constructor(name, type) {
    this._name = name;
  }

  // toString 使用移除底線的新 get 方法
  toString() { return `${this._name} (${this.type})`; }
}
