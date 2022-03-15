import { Table, Text, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import GroupService from '../services/GroupService';
import useIsMobile from './Hooks';

const Groups = () => {
  const isMobile = useIsMobile();

  const groups = useQuery('groups', () => GroupService.getGroups('U1')).data;

  const groupRows = groups?.map((group) => (
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
        <tbody>{groupRows}</tbody>
      </Table>
    </>
  );
};

export default Groups;
