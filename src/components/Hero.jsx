import React from 'react';

// Import the video file
import video from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='relative text-white bg-black'>
      {/* Video background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover opacity-60' // Reduce the opacity to make it light
        autoPlay
        loop
        muted
      >
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make video lighter */}
      <div className='absolute top-0 left-0 w-full h-full bg-[#93cced] opacity-60'></div>

      {/* Content on top of the video */}
      <div className='relative z-10 max-w-[1500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' font-bold p-2'>
          Leading Wenzhou Karar Trading Co LLC importer and stockist in Pakistan
        </p>
        <h1 className='xl:text-9xl lg:text-8xl md:text-6xl sm:text-6xl text-4xl font-bold md:py-10'>
          Karar Trading Co LLC
        </h1>
        <p className='md:text-xl text-xl font-semibold'>
          Delivering top-quality stainless steel products with unparalleled expertise and exceptional service for over 20 years.
        </p>
         {/* Button with link to download catalog */}
         <a
          href='/assets/catalog.pdf'  // Path from public folder
          download
          className='bg-[#19418c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#19418c]/90'
        >
          Download Catalog
        </a>
      </div>
    </div>
  );
};

export default Hero;
