import { Outlet } from 'react-router-dom';

const CareersLayout = () => (
  <div className="w-full">
    <h2>Careers</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, repellat.
    </p>

    <Outlet />
  </div>
);

export default CareersLayout;
