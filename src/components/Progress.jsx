import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card1 from '../assets/Card1.jpg';
import Card2 from '../assets/Card2.jpg';
import Card3 from '../assets/Card3.jpg';
import Card4 from '../assets/Card4.jpg';

const Progress = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For devices smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For devices smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Remove arrows for cleaner mobile view
        },
      },
      {
        breakpoint: 480, // For devices smaller than 480px (extra small screens)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Remove dots for very small screens
        },
      },
    ],
  };

  return (
    <div className='w-full pb-24 bg-gray-100'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-32'>
        <Slider {...settings}>
          {/* First Item */}
          <div className='flex justify-center p-4'>
            <img
              src={Card1}
              alt='Card 1'
              className='rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
            />
          </div>

          {/* Second Item */}
          <div className='flex justify-center p-4'>
            <img
              src={Card2}
              alt='Card 2'
              className='rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
            />
          </div>

          {/* Third Item */}
          <div className='flex justify-center p-4'>
            <img
              src={Card3}
              alt='Card 3'
              className='rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
            />
          </div>

          {/* Fourth Item */}
          <div className='flex justify-center p-4'>
            <img
              src={Card4}
              alt='Card 4'
              className='rounded-lg shadow-lg transform transition duration-500 hover:scale-105'
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Progress;
