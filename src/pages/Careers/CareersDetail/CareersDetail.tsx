/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from 'react-router-dom';

import type {
  CareersDetailDataType,
} from '@/pages/Careers/CareersDetail/CareersDetail.type';

import './CareersDetail.css';

const CareersDetail = () => {
  const careerDetailData = useLoaderData() as CareersDetailDataType;
  const { title, salary, location } = careerDetailData;

  return (
    <div className="career-details">
      <h2>
        Career details for
        {' '}
        {title}
      </h2>
      <p>
        Starting salary:
        {' '}
        {salary}
      </p>
      <p>
        Location:
        {' '}
        {location}
      </p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          temporibus inventore, perferendis cupiditate error non iure modi ad
          dolorem possimus eligendi molestiae vero consequatur blanditiis ipsum
          magni quasi! Dolores, nihil!
        </p>
      </div>
    </div>
  );
};

export const careersDetailLoader = async ({ params }: any) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);
  return response.json();
};

export default CareersDetail;
