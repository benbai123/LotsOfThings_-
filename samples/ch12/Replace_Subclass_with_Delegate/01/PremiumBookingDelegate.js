
class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 存取 host (此時還是 PremiumBooking) 的 _show 屬性
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }
}
