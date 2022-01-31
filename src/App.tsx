import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core';

export default function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
        >
          <Navbar.Section>
            <div>
              <Link to="/events" onClick={() => setOpened(false)}>
                Events
              </Link>
            </div>
            <div>
              <Link to="/groups" onClick={() => setOpened(false)}>
                Groups
              </Link>
            </div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>CREATE</Text>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
