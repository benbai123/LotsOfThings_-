
/** 書上沒有寫是放在哪裡，另開一個 factory 檔來放
 * 假設此檔案有 import/require Engineer, Employee 等 Class
 * */
function createEmployee(name, type) {
  switch (type) {
    case "engineer": return new Engineer(name, type);
    case "salesman": return new Salesman(name, type);
    case "manager": return new Manager(name, type);
  }
  return new Employee(name, type);
}