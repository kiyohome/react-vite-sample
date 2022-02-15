import dayjs from 'dayjs';

class OpeningTime {
  from: Date;

  to: Date;

  constructor(from: string, to: string) {
    this.from = dayjs(from).toDate();
    this.to = dayjs(to).toDate();
  }
}

export default OpeningTime;
