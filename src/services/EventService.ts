import Event from './Event';
import GroupService from './GroupService';

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

const getEvents = async (groupId: string): Promise<Event[]> => {
  await sleep(3000);
  const group = await GroupService.getGroup(groupId);
  const { events } = group;
  return events === undefined ? [] : events;
};

const addEvent = async (groupId: string, name: string): Promise<Event> => {
  const events = await getEvents(groupId);
  const next = events.length + 1;
  const id = `${groupId}E${next}`;
  const event = new Event(id, name);
  const group = await GroupService.getGroup(groupId);
  group.events = group.events?.concat(event);
  return event;
};

const getEvent = async (groupId: string, eventId: string): Promise<Event> => {
  let event;
  const events = await getEvents(groupId);
  if (events !== undefined) {
    event = events.find((e) => e.id === eventId);
  }
  if (event === undefined) {
    throw new Error(
      `Event not found. Group ID = [${groupId}] Event ID = [${eventId}]`,
    );
  }
  return event;
};

const changeEvent = async (groupId: string, event: Event): Promise<void> => {
  const originalEvent = await getEvent(groupId, event.id);
  originalEvent.name = event.name;
  originalEvent.openingTimes = event.openingTimes;
};

const deleteEvent = async (groupId: string, eventId: string): Promise<void> => {
  const group = await GroupService.getGroup(groupId);
  group.events = group.events?.filter((e) => e.id !== eventId);
};

const EventService = {
  getEvents,
  addEvent,
  getEvent,
  changeEvent,
  deleteEvent,
};

export default EventService;
