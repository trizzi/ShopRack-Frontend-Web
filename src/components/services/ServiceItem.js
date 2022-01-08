import React from 'react';

const ServiceItem = ({ data: { image, name, text } }) => {
  return (
    <div className=''>
      <img src={image} alt='' style={{ width: '60px' }} />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceItem;
