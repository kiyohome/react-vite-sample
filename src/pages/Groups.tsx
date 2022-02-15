import { Table, Text, Title } from '@mantine/core';
import GroupAPI from '../api/GroupAPI';
import useIsMobile from './Hooks';

const Groups = () => {
  const isMobile = useIsMobile();
  const groups = GroupAPI.getGropus('U001').map((group) => (
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
              <div key={member.id}>
                <Text>{member.name}</Text>
              </div>
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
              <th>
                <Text>&nbsp;</Text>
              </th>
            ) : (
              <>
                <th>
                  <Text>Name</Text>
                </th>
                <th>
                  <Text>Members</Text>
                </th>
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
