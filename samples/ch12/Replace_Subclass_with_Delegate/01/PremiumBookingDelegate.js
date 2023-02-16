
class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 雖然呼叫的方法改為定義到 Booking, 但 _host 還是會是 PremiumBooking 的實例
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }

  // 擴展方法的版本就不需要 basePrice
  
  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}
