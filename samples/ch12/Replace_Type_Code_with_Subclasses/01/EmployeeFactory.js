
/** 書上沒有寫是放在哪裡，另開一個 factory 檔來放
 * 假設此檔案有 import/require Engineer, Employee 等 Class
 * */
function createEmployee(name, type) {
  switch (type) {
    case "engineer": return new Engineer(name);
    case "salesman": return new Salesman(name);
    case "manager": return new Manager(name);
    default: throw new Error(`Employee cannot be of type ${type}`);
  }
}
