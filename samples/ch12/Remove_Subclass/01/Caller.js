

// ...
const numberOfMails = people.filter(p => isMale(p)).length;

function isMale(aPerson) {
  return aPerson instanceof Male;
}
// ...
