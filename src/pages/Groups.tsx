import { Table, Text, Title } from '@mantine/core';
import GroupService from '../services/GroupService';
import useIsMobile from './Hooks';

const Groups = () => {
  const isMobile = useIsMobile();

  const groups = GroupService.getGropus('U001').map((group) => (
    <tr key={group.id}>
      {isMobile ? (
        <td>
          <div>{group.name}</div>
          {group.members.map((member) => (
            <div key={member.id}>
              <Text color="dimmed" size="xs">
                {member.name}
              </Text>
            </div>
          ))}
        </td>
      ) : (
        <>
          <td>{group.name}</td>
          <td>
            {group.members.map((member) => (
              <div key={member.id}>{member.name}</div>
            ))}
          </td>
        </>
      )}
    </tr>
  ));

  return (
    <>
      <Title order={2}>Groups</Title>
      <Table highlightOnHover>
        <thead>
          <tr>
            {isMobile ? (
              <th>&nbsp;</th>
            ) : (
              <>
                <th>Name</th>
                <th>Members</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>{groups}</tbody>
      </Table>
    </>
  );
};

export default Groups;
