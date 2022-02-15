import OpeningTime from '../common/OpeningTime';
import Event from './Event';

const data: Map<string, Event[]> = new Map();

data.set('G001', [
  new Event('E001', '鶴ヶ城さくらまつり', [
    new OpeningTime('2022/4/3 9:00', '2022/4/3 18:00'),
    new OpeningTime('2022/4/4 9:00', '2022/4/3 18:00'),
    new OpeningTime('2022/4/5 9:00', '2022/4/3 18:00'),
  ]),
  new Event('E002', '会津祭り', [
    new OpeningTime('2022/9/18 9:00', '2022/9/18 18:00'),
    new OpeningTime('2022/9/19 9:00', '2022/9/19 20:00'),
    new OpeningTime('2022/9/20 9:00', '2022/9/20 18:00'),
  ]),
  new Event('E003', '鶴ヶ城ハーフマラソン大会', [
    new OpeningTime('2022/10/2 8:45', '2022/10/2 13:30'),
  ]),
]);

const getEvents = (userId: string): Event[] => {
  const events = data.get(userId);
  return typeof events === 'undefined' ? [] : events;
};

const EventAPI = {
  getEvents,
};

export default EventAPI;
