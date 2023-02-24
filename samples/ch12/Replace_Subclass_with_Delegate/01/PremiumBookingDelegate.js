
class PremiumBookingDelegate extends BookingDelegate {
  constructor(hostBooking, extras) {
    this._hostBooking = hostBooking;
    this._extras = extras;
  }

  // 雖然呼叫的方法改為定義到 Booking, 但 _host 還是會是 PremiumBooking 的實例
  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback');
  }

  // Booking 將預設方法移到 delegate，可直接覆寫
  get basePrice() {
    let result = this._host._show.price;
    if (this._host.isPeakDay) result += Math.round(result * 0.15);

    return Math.round(result + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}
