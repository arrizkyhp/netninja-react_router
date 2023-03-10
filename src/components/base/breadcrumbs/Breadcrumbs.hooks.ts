import { useLocation } from 'react-router-dom';

import type { LocationType } from '@/components/base/breadcrumbs/Breadcrumbs.type';

const useBreadcrumbs = () => {
  const location = useLocation() as LocationType;

  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '');

  return { crumbs };
};

export default useBreadcrumbs;
