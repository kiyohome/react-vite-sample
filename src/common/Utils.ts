import dayjs from 'dayjs';
import OpeningTime from '../services/OpeningTime';
import Constants from './Constants';
import Locale from './Locale';

class Utils {
  static formatOpeningTime(dateTime: OpeningTime): string {
    const from = Utils.#formatDateTime(dateTime.from);
    const to = Utils.#formatTime(dateTime.to);
    return `${from} - ${to}`;
  }

  static #formatDateTime(date: Date): string {
    const locale = Utils.getLocale();
    return dayjs(date).format(locale.dateTimeFormat);
  }

  static #formatTime(date: Date): string {
    const locale = Utils.getLocale();
    return dayjs(date).format(locale.timeFormat);
  }

  static formatNumber(num: number): string {
    const locale = Utils.getLocale();
    return new Intl.NumberFormat(locale.numberFormatLocale).format(num);
  }

  static getLocale(): Locale {
    const locale = Constants.LOCALES.get(window.navigator.language);
    return typeof locale === 'undefined' ? Constants.DEFAULT_LOCALE : locale;
  }
}

export default Utils;
