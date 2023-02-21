
function createBird(data) {
  switch(data.type) {
    case 'NorwegianBlueParrot': return new NorwegianBlueParrot(data);
    default: return new Bird(data);
  }
}
