import Event from './Event';
import Group from './Group';
import OpeningTime from '../common/OpeningTime';
import User from './User';

const data: Group[] = [
  new Group(
    'G1',
    'Aizurage',
    [new User('U1', 'Haruka Ayase'), new User('U2', 'Yumena Yanai')],
    [
      new Event(
        'G1E1',
        '鶴ヶ城さくらまつり',
        [
          new OpeningTime('2022/4/3 9:00', '2022/4/3 18:00'),
          new OpeningTime('2022/4/4 9:00', '2022/4/3 18:00'),
          new OpeningTime('2022/4/5 9:00', '2022/4/3 18:00'),
        ],
        1000,
      ),
      new Event(
        'G1E2',
        '会津祭り',
        [
          new OpeningTime('2022/9/18 9:00', '2022/9/18 18:00'),
          new OpeningTime('2022/9/19 9:00', '2022/9/19 20:00'),
          new OpeningTime('2022/9/20 9:00', '2022/9/20 18:00'),
        ],
        50000,
      ),
      new Event(
        'G1E3',
        '鶴ヶ城ハーフマラソン大会',
        [new OpeningTime('2022/10/2 8:45', '2022/10/2 13:30')],
        400,
      ),
    ],
  ),
  new Group(
    'G2',
    'TechBall',
    [
      new User('U1', 'Haruka Ayase'),
      new User('U3', 'Abareru-kun'),
      new User('U4', 'Nasubi'),
    ],
    [
      new Event(
        'G2E1',
        'ボタフェス',
        [
          new OpeningTime('2022/11/13 9:00', '2022/11/13 19:00'),
          new OpeningTime('2022/11/14 9:00', '2022/11/14 19:00'),
        ],
        2000,
      ),
      new Event(
        'G2E2',
        'お台場バーチャルフェスティバル',
        [
          new OpeningTime('2022/3/13 11:00', '2022/3/13 20:00'),
          new OpeningTime('2022/3/14 11:00', '2022/3/14 20:00'),
        ],
        1000,
      ),
    ],
  ),
];

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

const getGroups = async (userId: string): Promise<Group[]> => {
  await sleep(3000);
  return data.filter((group) => {
    const user = group.members.find((u) => u.id === userId);
    return user !== undefined;
  });
};

const getGroup = async (groupId: string): Promise<Group> => {
  const group = data.find((g) => g.id === groupId);
  if (group === undefined) {
    throw new Error(`Group not found. Group ID = [${groupId}]`);
  }
  return group;
};

const GroupService = {
  getGroups,
  getGroup,
};

export default GroupService;
