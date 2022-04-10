import {
  Alert,
  Anchor,
  Chip,
  Chips,
  Group,
  Modal,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import EventService from '../services/EventService';
import Utils from '../common/Utils';
import useIsMobile from './Hooks';
import Event from './Event';
import GroupService from '../services/GroupService';

const Events = () => {
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();
  const [addOpened, setAddOpened] = useState(false);
  const [groupId, setGroupId] = useState<string | undefined>(undefined);
  const { data: groups } = useQuery(
    'groups',
    () => GroupService.getGroups('U1'),
    {
      onSuccess: (data) => {
        if (groupId === undefined && !Utils.isEmpty(data)) {
          setGroupId(data[0].id);
          queryClient.invalidateQueries(['events', groupId]);
        }
      },
    },
  );
  const { data: events } = useQuery(
    ['events', groupId],
    () => EventService.getEvents(groupId!),
    {
      enabled: !!groupId,
    },
  );

  const eventRows = events?.map((event) => (
    <tr key={event.id}>
      {isMobile ? (
        <td>
          <div>{event.name}</div>
          {event.openingTimes?.map((dateTime) => (
            <div key={dateTime.from.getTime()}>
              <Text color="dimmed" size="xs">
                {Utils.formatOpeningTime(dateTime)}
              </Text>
            </div>
          ))}
          <div>
            {event.capacity !== undefined
              ? Utils.formatNumber(event.capacity)
              : ''}
          </div>
        </td>
      ) : (
        <>
          <td>{event.name}</td>
          <td>
            {event.openingTimes?.map((dateTime) => (
              <div key={dateTime.from.getTime()}>
                {Utils.formatOpeningTime(dateTime)}
              </div>
            ))}
          </td>
          <td>
            {event.capacity !== undefined
              ? Utils.formatNumber(event.capacity)
              : ''}
          </td>
        </>
      )}
    </tr>
  ));

  return (
    <>
      <Group position="apart">
        <Title order={2}>Events</Title>
        <Anchor onClick={() => setAddOpened(true)}>Add</Anchor>
      </Group>
      <Chips
        mt="md"
        variant="filled"
        multiple={false}
        value={groupId}
        onChange={setGroupId}
      >
        {groups?.map((g) => (
          <Chip value={g.id} key={g.id}>
            {g.name}
          </Chip>
        ))}
      </Chips>
      {events?.length > 0 ? (
        <Table mt="md" highlightOnHover>
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
          <tbody>{eventRows}</tbody>
        </Table>
      ) : (
        <Alert mt="md" color="green">
          {groups?.length > 0 ? 'Pick a group.' : 'Add a group!'}
        </Alert>
      )}
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
