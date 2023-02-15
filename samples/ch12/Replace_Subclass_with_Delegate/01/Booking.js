
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  /** 開頭使用底線表示不是公用介面
   * 如果目的是讓 booking 轉變成 premium booking
   * 就可以是公用的 ( toPremiumBooking, 類似 toString() )
   * */
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}
