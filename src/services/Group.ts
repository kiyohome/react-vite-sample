import Event from './Event';
import User from './User';

class Group {
  id: string;

  name: string;

  members: User[];

  events?: Event[];

  constructor(id: string, name: string, members: User[], events?: Event[]) {
    this.id = id;
    this.name = name;
    this.members = members;
    this.events = events;
  }
}

export default Group;
