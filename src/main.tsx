import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import NotFound from './pages/NotFound';
import Groups from './pages/Groups';
import Events from './pages/Events';
import Welcome from './pages/Welcome';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <MantineProvider
        theme={{
          fontFamily: 'Noto Sans JP, sans-serif',
          headings: { fontFamily: 'Noto Sans JP, sans-serif' },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Welcome />} />
              <Route path="events" element={<Events />} />
              <Route path="groups" element={<Groups />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
