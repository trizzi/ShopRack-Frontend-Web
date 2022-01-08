import React from 'react';

const BlogItem = ({ blog: { image, name, text } }) => {
  return (
    <div className=''>
      <img src={image} alt='' style={{ width: '60px' }} />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default BlogItem;
