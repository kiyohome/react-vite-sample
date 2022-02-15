import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  Anchor,
  AppShell,
  Burger,
  Group,
  Header,
  Image,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import logo from './logo.svg';

const App = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const links = [
    { label: 'Events', path: '/events' },
    { label: 'Groups', path: '/groups' },
  ];
  const close = () => setOpened(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 200 }}
        >
          <Navbar.Section>
            {links.map((link) => (
              <Anchor
                component={Link}
                to={link.path}
                key={link.path}
                style={{ display: 'block' }}
                mb={5}
                onClick={close}
              >
                <Text>{link.label}</Text>
              </Anchor>
            ))}
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <Group position="apart">
            <Anchor
              component={Link}
              to="/"
              variant="text"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
              onClick={close}
            >
              <Image src={logo} width={40} height={40} />
              <Text>CREATE</Text>
            </Anchor>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </MediaQuery>
          </Group>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default App;
