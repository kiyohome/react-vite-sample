import dayjs from 'dayjs';
import OpeningTime from './OpeningTime';
import Constants from './Constants';

class Utils {
  static formatDate(date: Date): string {
    return dayjs(date).format(Constants.DATETIME_FORMAT);
  }

  static formatDateTime(dateTime: OpeningTime): string {
    const from = Utils.formatDate(dateTime.from);
    const to = Utils.formatDate(dateTime.from);
    return `${from} - ${to}`;
  }
}

export default Utils;
