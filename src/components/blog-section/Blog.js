import React from 'react';
import BlogItem from './BlogItem';
import blog from './blog.json';
import {useTheme} from '../../context/ThemeContext';

const Blog = () => {
  const {theme} = useTheme();
  
  return (
    <div className="relative w-full min-h-0" >

      <div className="absolute left-3/4 bottom-24 opacity-30">
        {/** Background image Blob */}
        <svg width="786" height="516" viewBox="0 0 786 516" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M766.973 386.354C717.356 446.015 615.035 372.607 470.016 409.037C344.413 440.604 338.878 517.012 237.917 515.519C164.158 514.442 82.8859 473.709 37.0698 400.575C-13.4564 319.938 2.35032 236.319 6.8591 216.013C26.9778 124.934 91.7031 75.663 114.549 58.8177C208.678 -10.5439 316.279 -1.2029 367.9 3.25258C561.806 20.0514 772.017 153.451 784.642 303.378C786.313 323.006 789.37 359.412 766.973 386.354Z" fill="url(#paint0_linear_71_1171)"/>
          <defs>
            <linearGradient id="paint0_linear_71_1171" x1="286.984" y1="635.113" x2="468.126" y2="44.8646" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F15A25"/>
              <stop offset="1" stopColor="#0C49A6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='container mx-auto py-10 lg:py-32'  style={{color:theme.textcolor.dark}}>
        <div className="flex flex-col items-center space-y-7">
          <h1 className="text-3xl xl:text-4xl font-black">
            Checkout our blog
          </h1>
          <span className="h-1 w-20 bg-gray-200"></span>

        </div>
        <div className="relative flex flex-wrap w-full lg:justify-center lg:space-x-6 pt-10 md:pt-20">

          <div className="absolute lg:top-6 md:top-16 md:-ml-10 lg:ml-0 md:left-0 lg:left-20 xl:left-32">
            {/** Background image Squar boxes */}
            <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M54.7825 5.02247C53.6325 6.17247 51.7725 6.17247 50.6225 5.02247C49.4725 3.87247 49.4725 2.0125 50.6225 0.8625C51.7725 -0.2875 53.6325 -0.2875 54.7825 0.8625C55.9325 2.0125 55.9325 3.87247 54.7825 5.02247ZM67.2225 13.3025C66.0725 12.1525 64.2125 12.1525 63.0625 13.3025C61.9125 14.4525 61.9125 16.3125 63.0625 17.4625C64.2125 18.6125 66.0725 18.6125 67.2225 17.4625C68.3725 16.3125 68.3725 14.4525 67.2225 13.3025ZM79.6625 25.7425C78.5125 24.5925 76.6525 24.5925 75.5025 25.7425C74.3525 26.8925 74.3525 28.7525 75.5025 29.9025C76.6525 31.0525 78.5125 31.0525 79.6625 29.9025C80.8125 28.7525 80.8125 26.8925 79.6625 25.7425ZM92.1025 38.1825C90.9525 37.0325 89.0925 37.0325 87.9425 38.1825C86.7925 39.3325 86.7925 41.1925 87.9425 42.3425C89.0925 43.4925 90.9525 43.4925 92.1025 42.3425C93.2525 41.1925 93.2525 39.3325 92.1025 38.1825ZM104.542 50.6225C103.392 49.4725 101.533 49.4725 100.383 50.6225C99.2325 51.7725 99.2325 53.6325 100.383 54.7825C101.533 55.9325 103.392 55.9325 104.542 54.7825C105.692 53.6325 105.692 51.7725 104.542 50.6225ZM42.3425 13.3025C41.1925 12.1525 39.3325 12.1525 38.1825 13.3025C37.0325 14.4525 37.0325 16.3125 38.1825 17.4625C39.3325 18.6125 41.1925 18.6125 42.3425 17.4625C43.4925 16.3125 43.4925 14.4525 42.3425 13.3025ZM54.7825 25.7425C53.6325 24.5925 51.7725 24.5925 50.6225 25.7425C49.4725 26.8925 49.4725 28.7525 50.6225 29.9025C51.7725 31.0525 53.6325 31.0525 54.7825 29.9025C55.9325 28.7525 55.9325 26.8925 54.7825 25.7425ZM67.2225 38.1825C66.0725 37.0325 64.2125 37.0325 63.0625 38.1825C61.9125 39.3325 61.9125 41.1925 63.0625 42.3425C64.2125 43.4925 66.0725 43.4925 67.2225 42.3425C68.3725 41.1925 68.3725 39.3325 67.2225 38.1825ZM79.6625 50.6225C78.5125 49.4725 76.6525 49.4725 75.5025 50.6225C74.3525 51.7725 74.3525 53.6325 75.5025 54.7825C76.6525 55.9325 78.5125 55.9325 79.6625 54.7825C80.8125 53.6325 80.8125 51.7725 79.6625 50.6225ZM92.1025 63.0625C90.9525 61.9125 89.0925 61.9125 87.9425 63.0625C86.7925 64.2125 86.7925 66.0725 87.9425 67.2225C89.0925 68.3725 90.9525 68.3725 92.1025 67.2225C93.2525 66.0725 93.2525 64.2125 92.1025 63.0625ZM29.9025 25.7425C28.7525 24.5925 26.8925 24.5925 25.7425 25.7425C24.5925 26.8925 24.5925 28.7525 25.7425 29.9025C26.8925 31.0525 28.7525 31.0525 29.9025 29.9025C31.0525 28.7525 31.0525 26.8925 29.9025 25.7425ZM42.3425 38.1825C41.1925 37.0325 39.3325 37.0325 38.1825 38.1825C37.0325 39.3325 37.0325 41.1925 38.1825 42.3425C39.3325 43.4925 41.1925 43.4925 42.3425 42.3425C43.4925 41.1925 43.4925 39.3325 42.3425 38.1825ZM54.7825 50.6225C53.6325 49.4725 51.7725 49.4725 50.6225 50.6225C49.4725 51.7725 49.4725 53.6325 50.6225 54.7825C51.7725 55.9325 53.6325 55.9325 54.7825 54.7825C55.9325 53.6325 55.9325 51.7725 54.7825 50.6225ZM67.2225 63.0625C66.0725 61.9125 64.2125 61.9125 63.0625 63.0625C61.9125 64.2125 61.9125 66.0725 63.0625 67.2225C64.2125 68.3725 66.0725 68.3725 67.2225 67.2225C68.3725 66.0725 68.3725 64.2125 67.2225 63.0625ZM79.6625 75.5025C78.5125 74.3525 76.6525 74.3525 75.5025 75.5025C74.3525 76.6525 74.3525 78.5125 75.5025 79.6625C76.6525 80.8125 78.5125 80.8125 79.6625 79.6625C80.8125 78.5125 80.8125 76.6425 79.6625 75.5025ZM17.4625 38.1825C16.3125 37.0325 14.4525 37.0325 13.3025 38.1825C12.1525 39.3325 12.1525 41.1925 13.3025 42.3425C14.4525 43.4925 16.3125 43.4925 17.4625 42.3425C18.6125 41.1925 18.6125 39.3325 17.4625 38.1825ZM29.9025 50.6225C28.7525 49.4725 26.8925 49.4725 25.7425 50.6225C24.5925 51.7725 24.5925 53.6325 25.7425 54.7825C26.8925 55.9325 28.7525 55.9325 29.9025 54.7825C31.0525 53.6325 31.0525 51.7725 29.9025 50.6225ZM42.3425 63.0625C41.1925 61.9125 39.3325 61.9125 38.1825 63.0625C37.0325 64.2125 37.0325 66.0725 38.1825 67.2225C39.3325 68.3725 41.1925 68.3725 42.3425 67.2225C43.4925 66.0725 43.4925 64.2125 42.3425 63.0625ZM54.7825 75.5025C53.6325 74.3525 51.7725 74.3525 50.6225 75.5025C49.4725 76.6525 49.4725 78.5125 50.6225 79.6625C51.7725 80.8125 53.6325 80.8125 54.7825 79.6625C55.9325 78.5125 55.9325 76.6425 54.7825 75.5025ZM67.2225 87.9425C66.0725 86.7925 64.2125 86.7925 63.0625 87.9425C61.9125 89.0925 61.9125 90.9525 63.0625 92.1025C64.2125 93.2525 66.0725 93.2525 67.2225 92.1025C68.3725 90.9525 68.3725 89.0825 67.2225 87.9425ZM5.02253 50.6225C3.87253 49.4725 2.0125 49.4725 0.8625 50.6225C-0.2875 51.7725 -0.2875 53.6325 0.8625 54.7825C2.0125 55.9325 3.87253 55.9325 5.02253 54.7825C6.17253 53.6325 6.17253 51.7725 5.02253 50.6225ZM17.4625 63.0625C16.3125 61.9125 14.4525 61.9125 13.3025 63.0625C12.1525 64.2125 12.1525 66.0725 13.3025 67.2225C14.4525 68.3725 16.3125 68.3725 17.4625 67.2225C18.6125 66.0725 18.6125 64.2125 17.4625 63.0625ZM29.9025 75.5025C28.7525 74.3525 26.8925 74.3525 25.7425 75.5025C24.5925 76.6525 24.5925 78.5125 25.7425 79.6625C26.8925 80.8125 28.7525 80.8125 29.9025 79.6625C31.0525 78.5125 31.0525 76.6425 29.9025 75.5025ZM42.3425 87.9425C41.1925 86.7925 39.3325 86.7925 38.1825 87.9425C37.0325 89.0925 37.0325 90.9525 38.1825 92.1025C39.3325 93.2525 41.1925 93.2525 42.3425 92.1025C43.4925 90.9525 43.4925 89.0825 42.3425 87.9425ZM54.7825 100.372C53.6325 99.2225 51.7725 99.2225 50.6225 100.372C49.4725 101.522 49.4725 103.382 50.6225 104.532C51.7725 105.682 53.6325 105.682 54.7825 104.532C55.9325 103.392 55.9325 101.522 54.7825 100.372Z" fill="#F15A25"/>
            </svg>
          </div>

          {blog.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
