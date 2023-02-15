
// booking 使用方
aBooking = createBooking(show, date);

// premium booking 使用方
aBooking = createPremiumBooking(show, date, extras);

function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  return new PremiumBooking(show, date, extras);
}