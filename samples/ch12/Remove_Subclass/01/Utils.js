
function createPerson(aRecord) {
	switch (aRecord.gender) {
    case 'M' : return new Male(aRecord.name);
    case 'F' : return new Female(aRecord.name);
    default : return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}