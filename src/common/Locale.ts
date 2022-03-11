class Locale {
  language: string;

  dateFormat: string;

  timeFormat: string;

  dateTimeFormat: string;

  numberFormatLocale: string;

  constructor(
    language: string,
    numberFormatLocale: string,
    dateFormat: string,
    timeFormat = 'h:mma',
    dateTimeFormat = `${dateFormat} ${timeFormat}`,
  ) {
    this.language = language;
    this.numberFormatLocale = numberFormatLocale;
    this.dateFormat = dateFormat;
    this.timeFormat = timeFormat;
    this.dateTimeFormat = dateTimeFormat;
  }
}

export default Locale;
