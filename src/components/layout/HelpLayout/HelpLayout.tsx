import { NavLink, Outlet } from 'react-router-dom';

import './HelpLayout.css';

const HelpLayout = () => (
  <div className="help-layout ">
    <h2>Website Help</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, nam?</p>

    <nav>
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>

    <Outlet />
  </div>
);

export default HelpLayout;
