import React from 'react';

const CustomerReviewItem = ({
  reviewdata: { image, name, occupation, review },
}) => {
  return (
    <div>
      <h3>What our customers are saying</h3>
      <div>
        <div>
          <img src={image} alt='Customer-face' />
          <h5>{name}</h5>
          <p>{occupation}</p>
        </div>
        <div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewItem;
