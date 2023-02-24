
class BookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 原本 Booking 的預設方法
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback') && !this._host.isPeakDay;
  }

  // 原本 Booking 的預設方法
  get basePrice() {
    let result = this._host._show.price;
    if (this._host.isPeakDay) result += Math.round(result * 0.15);
    
    return result;
  }

  // 原本 Booking 的預設方法
  get hasDinner() {
    return undefined;
  }
}
