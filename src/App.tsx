import React from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutProvider } from '@/contexts/LayoutContext';

import './App.css';

const App = () => (
  <LayoutProvider>
    <Outlet />
  </LayoutProvider>
);

export default App;
