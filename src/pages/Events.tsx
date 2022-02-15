import { Table, Text, Title } from '@mantine/core';
import EventAPI from '../api/EventAPI';
import Utils from '../common/Utils';
import useIsMobile from './Hooks';

const Events = () => {
  const isMobile = useIsMobile();
  const events = EventAPI.getEvents('G001').map((event) => (
    <tr key={event.id}>
      {isMobile ? (
        <td>
          <div>
            <Text>{event.name}</Text>
          </div>
          {event.openingTimes.map((dateTime) => (
            <div key={dateTime.from.getTime()}>
              <Text color="dimmed" size="xs">
                {Utils.formatDateTime(dateTime)}
              </Text>
            </div>
          ))}
        </td>
      ) : (
        <>
          <td>{event.name}</td>
          <td>
            {event.openingTimes.map((dateTime) => (
              <div key={dateTime.from.getTime()}>
                <Text>{Utils.formatDateTime(dateTime)}</Text>
              </div>
            ))}
          </td>
        </>
      )}
    </tr>
  ));
  return (
    <>
      <Title order={2}>Events</Title>
      <Table highlightOnHover>
        <thead>
          <tr>
            {isMobile ? (
              <th>
                <Text>&nbsp;</Text>
              </th>
            ) : (
              <>
                <th>
                  <Text>Name</Text>
                </th>
                <th>
                  <Text>Date and time</Text>
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </Table>
    </>
  );
};

export default Events;
