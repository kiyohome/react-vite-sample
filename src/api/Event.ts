import OpeningTime from '../common/OpeningTime';

class Event {
  id: string;

  name: string;

  openingTimes: OpeningTime[];

  constructor(id: string, name: string, openingTimes: OpeningTime[]) {
    this.id = id;
    this.name = name;
    this.openingTimes = openingTimes;
  }
}

export default Event;
