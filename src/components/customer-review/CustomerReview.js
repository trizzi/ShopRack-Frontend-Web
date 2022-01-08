import React from 'react';
import CustomerReviewItem from './CustomerReviewItem';
import reviewdata from './reviewData.json';

const CustomerReview = () => {
  return (
    <div className='container mx-auto'>
      {reviewdata.map((reviewdata) => (
        <CustomerReviewItem
          key={reviewdata.id}
          reviewdata={reviewdata}
        />
      ))}
    </div>
  );
};

export default CustomerReview;
