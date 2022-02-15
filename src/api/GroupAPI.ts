import Group from './Group';
import User from './User';

const data: Group[] = [
  new Group('G001', 'Aizurage', [
    new User('U001', 'Haruka Ayase'),
    new User('U002', 'Yumena Yanai'),
  ]),
  new Group('G002', 'TechBall', [new User('U001', 'Haruka Ayase')]),
];

const getGropus = (userId: string): Group[] =>
  data.filter(
    (group) => group.members.filter((user) => user.id === userId).length > 0,
  );

const GroupAPI = {
  getGropus,
};

export default GroupAPI;
