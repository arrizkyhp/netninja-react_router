import { Link } from 'react-router-dom';

import useBreadcrumbs from '@/components/base/breadcrumbs/Breadcrumbs.hooks';

import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const { crumbs } = useBreadcrumbs();
  let currentLink = '';

  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
