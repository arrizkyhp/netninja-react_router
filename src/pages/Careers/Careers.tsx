import { Link, useLoaderData } from 'react-router-dom';

import type { CareersDataType } from '@/pages/Careers/Careers.type';

import './Careers.css';

const Careers = () => {
  const careersData = useLoaderData() as CareersDataType[];

  return (
    <div className="careers">
      {careersData.map((data) => (
        <Link key={data.id} to={data.id.toString()}>
          <p>{data.title}</p>
          <p>
            Based in
            {' '}
            {data.location}
          </p>
        </Link>
      ))}
    </div>
  );
};

export const careersLoader = async () => {
  const response = await fetch('http://localhost:4000/careers');

  if (!response.ok) {
    throw Error('Could not fetch the careers');
  }

  return response.json();
};

export default Careers;
