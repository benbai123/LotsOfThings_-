
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
    this._premiumDelegate = new BookingDelegate(this, extras);
  }

  get hasTalkback() {
    // 書中用三元運算
    return this._premiumDelegate.hasTalkback;
  }

  get basePrice() {
    return this._premiumDelegate.extendBasePrice(result);
  }

  get hasDinner() {
    return this._premiumDelegate.hasDinner;
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
