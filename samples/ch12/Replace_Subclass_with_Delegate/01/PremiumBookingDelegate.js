
class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 雖然呼叫的方法改為定義到 Booking, 但 _host 還是會是 PremiumBooking 的實例
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }
}
