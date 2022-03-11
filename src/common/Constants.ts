import Locale from './Locale';

class Constants {
  static #DEFAULT_LOCALE = new Locale('en', 'en-US', 'D MMM, YYYY');

  static #LOCALES: Map<string, Locale> = new Map([
    ['en', Constants.#DEFAULT_LOCALE],
    ['ja', new Locale('ja', 'ja-JP', 'YYYY-M-D')],
  ]);

  static get DEFAULT_LOCALE(): Locale {
    return Constants.DEFAULT_LOCALE;
  }

  static get LOCALES(): Map<string, Locale> {
    return Constants.#LOCALES;
  }
}

export default Constants;
