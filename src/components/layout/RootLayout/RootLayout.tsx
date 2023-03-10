import { NavLink, Outlet } from 'react-router-dom';

import Breadcrumbs from '@/components/base/breadcrumbs';

const RootLayout = () => (
  <div>
    <header>
      <nav>
        <h1>Practice Router</h1>
        <div className="menuLink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </div>
      </nav>
      <Breadcrumbs />
    </header>

    <main>
      <Outlet />
    </main>
  </div>
);

export default RootLayout;
