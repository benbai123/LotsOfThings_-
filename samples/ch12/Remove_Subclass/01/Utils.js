
function createPerson(aRecord) {
	let p;
	switch (aRecord.gender) {
    case 'M' : p = new Male(aRecord.name); break;
    case 'F' : p = new Female(aRecord.name); break;
    default : p = new Person(aRecord.name);
  }
  return p;
}

function loadFromInput(data) {
  const result = [];
  data.forEach(aRecord => {
    result.push(createPerson(aRecord));
  });
  return result;
}