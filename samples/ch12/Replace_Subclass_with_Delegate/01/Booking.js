
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    // 書中用三元運算
    if (this._premiumDelegate) {
      return this._premiumDelegate.hasTalkback;
    }
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    // 書中用三元運算
    if (this._premiumDelegate) {
      return this._premiumDelegate.extendBasePrice(result);
    }
    return result;
  }

  get hasDinner() {
    if (this._premiumDelegate) {
      return this._premiumDelegate.hasDinner;
    }
    return undefined;
  }

  // 擴展方法的版本就不需要 _privateBasePrice

  /** 開頭使用底線表示不是公用介面
   * 如果目的是讓 booking 轉變成 premium booking
   * 就可以是公用的 ( toPremiumBooking, 類似 toString() )
   * */
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}
