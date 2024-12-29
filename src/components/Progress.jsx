import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { MdTipsAndUpdates } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaTasks } from "react-icons/fa";

const Progress = () => {
  return (
    <div className='w-full py-16 text-white px-8 primary'>
      <div className='grid xl:grid-cols-4 px-48 lg:grid-cols-4 px-48 md:grid-cols-2 sm:grid-cols-1 gap-12 py-16 justify-center items-center'>
        
        {/* First Item */}
        <div className='flex items-center gap-6 justify-center'>
          <FaDatabase className='w-24 h-24' />
          <div className='text-left'>
            <div className='text-2xl font-bold leading-none'>40,000+</div>
            <div className='text-sm font-medium mt-2'>
              Metric Tons Stock on <br /> Ground
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className='flex items-center gap-6 justify-center'>
          <MdTipsAndUpdates className='w-24 h-24' />
          <div className='text-left'>
            <div className='text-2xl font-bold leading-none'>1 Million+</div>
            <div className='text-sm font-medium mt-2'>
              Sq ft Stocking <br /> Facility
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className='flex items-center gap-6 justify-center'>
          <SlCalender className='w-24 h-24' />
          <div className='text-left'>
            <div className='text-2xl font-bold leading-none'>30+</div>
            <div className='text-sm font-medium mt-2'>
              Years of Piping <br /> Experience
            </div>
          </div>
        </div>

        {/* Fourth Item */}
        <div className='flex items-center gap-6 justify-center'>
          <FaTasks className='w-24 h-24' />
          <div className='text-left'>
            <div className='text-2xl font-bold leading-none'>25 Million+</div>
            <div className='text-sm font-medium mt-2'>
              Kilometers Pipes <br /> Delivered
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Progress;
