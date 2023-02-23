
class Scroll {
  constructor(id, dateLastCleaned, catalogID, catalog) {
    this._id = id;
    // 個人會更偏好由 loader 找好 catalog item 傳入 scroll 的建構式
    // 一來 scroll 會比較單純，且可以減少 catalog 被修改或 memory leak 的可能
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dateLastCleaned;
  }

  get id() {
    return this._catalogItem.id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(aString) {
    return this._catalogItem.hasTag(aString);
  }

  needsCleaning(targetDate) {
    // revered : 崇敬，寶
    const threshold = this.hasTag('revered') ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
