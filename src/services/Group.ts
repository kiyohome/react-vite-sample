import User from './User';

class Group {
  id: string;

  name: string;

  members: User[];

  constructor(id: string, name: string, members: User[]) {
    this.id = id;
    this.name = name;
    this.members = members;
  }
}

export default Group;
