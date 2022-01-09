import React from 'react';
import CustomerReviewItem from './CustomerReviewItem';
import reviewdata from './reviewData.json';
import {useTheme} from '../../context/ThemeContext'

const CustomerReview = () => {
  const {theme} = useTheme();

  return (
    <div className='container mx-auto py-10 lg:py-32 flex justify-center'>
      <div className="w-11/12 lg:w-9/12 p-10 lg:p-20 rounded-3xl bg-gradient-to-t from-indigo-900 via-purple-800 to-pink-500" 
        style={{color:theme.textcolor.light}}
      >
        <div className="flex flex-col items-center space-y-7">
          <h1 className="text-3xl xl:text-4xl font-black">
            What our customers are saying
          </h1>
          <span className="h-1 w-20 bg-gray-200"></span>

        </div>

        {reviewdata.map((reviewdata) => (
          <CustomerReviewItem
            key={reviewdata.id}
            reviewdata={reviewdata}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
