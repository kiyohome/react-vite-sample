import {
  Anchor,
  Button,
  Group,
  Modal,
  Table,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import EventService from '../services/EventService';
import Utils from '../common/Utils';
import useIsMobile from './Hooks';
import Event from './Event';

const Events = () => {
  const isMobile = useIsMobile();

  const events = EventService.getEvents('G001').map((event) => (
    <tr key={event.id}>
      {isMobile ? (
        <td>
          <div>{event.name}</div>
          {event.openingTimes.map((dateTime) => (
            <div key={dateTime.from.getTime()}>
              <Text color="dimmed" size="xs">
                {Utils.formatOpeningTime(dateTime)}
              </Text>
            </div>
          ))}
          <div>{Utils.formatNumber(event.capacity)}</div>
        </td>
      ) : (
        <>
          <td>{event.name}</td>
          <td>
            {event.openingTimes.map((dateTime) => (
              <div key={dateTime.from.getTime()}>
                {Utils.formatOpeningTime(dateTime)}
              </div>
            ))}
          </td>
          <td>{Utils.formatNumber(event.capacity)}</td>
        </>
      )}
    </tr>
  ));

  const [addOpened, setAddOpened] = useState(false);

  return (
    <>
      <Group position="apart">
        <Title order={2}>Events</Title>
        <Anchor onClick={() => setAddOpened(true)}>Add</Anchor>
      </Group>
      <Table highlightOnHover>
        <thead>
          <tr>
            {isMobile ? (
              <th>&nbsp;</th>
            ) : (
              <>
                <th>Name</th>
                <th>Opening time</th>
                <th>Capacity</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </Table>
      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title="Add a new event"
        centered
      >
        <Event />
      </Modal>
    </>
  );
};

export default Events;
