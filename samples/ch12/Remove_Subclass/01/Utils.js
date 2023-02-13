
function createPerson(aRecord) {
	switch (aRecord.gender) {
    case 'M' : return new Person(aRecord.name, "M");
    case 'F' : return new Person(aRecord.name, "F");
    default : return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}