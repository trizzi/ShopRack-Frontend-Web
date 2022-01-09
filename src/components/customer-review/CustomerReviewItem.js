import React from 'react';

const CustomerReviewItem = ({
  reviewdata: { image, name, occupation, review },
}) => {
  return (
    <div className="md:flex pt-10 items-center">
      <div className="flex w-full md:w-1/2 space-x-4">
        <img src={image} alt='Customer-face' className="rounded-full w-32 h-32" />
        <div className="flex flex-col justify-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <small>{occupation}</small>
        </div>
      </div>
      <div className="w-full md:w-1/2 pr-10 py-10 md:py-0">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default CustomerReviewItem;
