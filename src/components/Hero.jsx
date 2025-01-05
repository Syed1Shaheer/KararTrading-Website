import React from 'react';

// Import the video file
import video from '../assets/video.mp4';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='relative text-white bg-black'>
      {/* Video background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover' // Reduce the opacity to make it light
        autoPlay
        loop
        muted
      >
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make video lighter */}
      <div className='absolute top-0 left-0 w-full h-full  '></div>

      {/* Content on top of the video */}
      <div className='relative z-10 max-w-[1500px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        <h1 className='xl:text-9xl lg:text-8xl md:text-6xl sm:text-6xl text-4xl font-bold md:py-10 opacity-45'>
          {t('Karar Trading Co LLC')}
        </h1>
         {/* Button with link to download catalog */}
         
      </div>
    </div>
  );
};

export default Hero;
