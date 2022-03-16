import OpeningTime from './OpeningTime';

class Event {
  id: string;

  name: string;

  openingTimes?: OpeningTime[];

  capacity?: number;

  constructor(
    id: string,
    name: string,
    openingTimes?: OpeningTime[],
    capacity?: number,
  ) {
    this.id = id;
    this.name = name;
    this.openingTimes = openingTimes;
    this.capacity = capacity;
  }
}

export default Event;
