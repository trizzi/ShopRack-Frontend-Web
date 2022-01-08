import React from 'react';
import ServiceItem from './ServiceItem';
import data from './data.json';
import Button from '../button-component/Button';


const Services = () => {
  return (
    <div className='container mx-auto py-10 lg:py-32'>
      <div className="flex flex-col items-center space-y-7">
        <h1 className="text-3xl xl:text-4xl font-black">
          ShopRacks Services
        </h1>
        <span className="h-1 w-20 bg-gray-200"></span>
        <p className="w-3/4 text-center">
          ShopRacks as a business solution leverages on technology
          to facilitate the core aspects of your online store. We
          provide a platform for you to easily document, send and track
          invoices. You can also manage and track inventories, orders and
          deliveries seemlessly.
        </p>

      </div>
      <div className="flex flex-wrap p-20 justify-center">
        {data.map((data) => (
          <ServiceItem key={data.id} data={data} />
        ))}
      </div>

      <div className="flex justify-center">
          <Button 
            text="LEARN MORE"
          />
      </div>
    </div>
  );
};

export default Services;
