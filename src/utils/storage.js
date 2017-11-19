class Storage {
  constructor(type) {
    this.storage = window[type];
    this.available = this.isAvailable();
  }

  isAvailable() {
    try {
      this.storage.setItem('__testFeature', true);
      this.storage.removeItem('__testFeature');
      return true;
    } catch (ex) {
      return false;
    }
  }

  get(storageKey, defaultValue) {
    if (!this.available) {
      return defaultValue;
    }

    try {
      const storageData = JSON.parse(this.storage.getItem(storageKey));
      return storageData !== null ? storageData : defaultValue;
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.warn(`Unable to parse storage value ${storageKey}`);
      return defaultValue;
    }
  }

  set(storageKey, value) {
    if (!this.available) {
      return false;
    }

    this.storage.setItem(storageKey, JSON.stringify(value));
    return true;
  }

  remove(key) {
    if (this.available) {
      this.storage.removeItem(key);
    }
  }
}

export const local = new Storage('localStorage');
export const session = new Storage('sessionStorage');
