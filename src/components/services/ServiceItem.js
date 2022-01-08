import React from 'react';

const ServiceItem = ({ data: { image, name, text } }) => {
  return (
    <div className='w-full md:w-2/5 lg:w-1/4 p-12 shadow-xl rounded-xl m-5 space-y-3'>
      <img src={image} alt='' className="w-28" />
      <h3 className="font-bold text-xl" >{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
