import { Link, useRouteError } from 'react-router-dom';

import './CareersError.css';

const CareersError = () => {
  const error = useRouteError() as Error;

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">back to the Homepage</Link>
    </div>
  );
};

export default CareersError;
