
class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 此時沒有人會呼叫到此方法
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }
}
