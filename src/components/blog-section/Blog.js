import React from 'react';
import BlogItem from './BlogItem';
import blog from './blog.json';

const Blog = () => {
  return (
    <div className='container mx-auto'>
      {blog.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
