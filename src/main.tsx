import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';
import NotFound from './routes/NotFound';
import Groups from './routes/Groups';
import Events from './routes/Events';

render(
  <React.StrictMode>
    <MantineProvider theme={{ fontFamily: 'Open Sans' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="events" element={<Events />} />
            <Route path="groups" element={<Groups />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
