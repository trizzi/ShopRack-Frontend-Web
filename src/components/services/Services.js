import React from 'react';
import ServiceItem from './ServiceItem';
import data from './data.json';

const Services = () => {
  return (
    <div className='container mx-auto'>
      {data.map((data) => (
        <ServiceItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Services;
