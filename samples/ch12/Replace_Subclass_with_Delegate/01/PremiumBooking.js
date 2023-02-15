
class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }

  /** 呼叫 _bePremium 方法中建立的 delegate 的 getter
   * */
  get hasTalkback() {
    return this._premiumDelegate.hasTalkback;
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}
