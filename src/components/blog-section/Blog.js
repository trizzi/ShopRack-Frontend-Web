import React from 'react';
import BlogItem from './BlogItem';
import blog from './blog.json';

const Blog = () => {
  return (
    <div className='container mx-auto py-10 lg:py-32'>
      <div className="flex flex-col items-center space-y-7">
        <h1 className="text-3xl xl:text-4xl font-black">
          Checkout our blog
        </h1>
        <span className="h-1 w-20 bg-gray-200"></span>

      </div>
      <div className="flex flex-wrap w-full justify-center space-x-6 pt-10 md:pt-20">
        {blog.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
