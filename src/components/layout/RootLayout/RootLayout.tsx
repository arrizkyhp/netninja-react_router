import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => (
  <div>
    <header>
      <nav>
        <h1>Practice Router</h1>
        <div className="menuLink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
  </div>
);

export default RootLayout;
