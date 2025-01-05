import React from 'react';
import { FaFacebookSquare, FaInstagram, FaPhone, FaTwitterSquare } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className='relative bg-black bg-opacity-60' 
      style={{
        backgroundImage: "url('/assets/industry.jpg')",  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken the image */}
      <div className='absolute inset-0 bg-black opacity-60'></div>

      <div className='relative max-w-[1240px] mx-auto py-10 md:py-14 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 text-gray-300'>
        {/* First Section */}
        <div className='text-center lg:text-left mb-12 lg:mb-0'>
          <h1 className='w-full text-3xl font-bold text-white'>{t('Karar Trading Co LLC')}</h1>
          <p className='py-6'>
          {t('With 35 years of excellence, Karar Trading Co. LLC has established itself as a trusted supplier of premium-quality materials. We specialize in the supply of stainless steel, carbon steel, alloy steel, and nickel alloy steel products, catering to diverse industries with a commitment to quality and reliability.')}          </p>
          <div className='flex justify-center lg:justify-start gap-6 my-6'>
            <a href='https://www.facebook.com/profile.php?id=100064073110181&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
              <FaFacebookSquare size={30} className='cursor-pointer' />
            </a>
            <FaInstagram size={30} className='cursor-pointer'  />
            <FaTwitterSquare size={30} className='cursor-pointer'  />
          </div>
        </div>

        {/* Second Section */}
        <div className='lg:col-span-1 flex flex-col items-center lg:items-start mb-12 lg:mb-0'>
          <div className='space-y-6 text-center lg:text-left'>
            <h6 className='font-medium text-gray-400 text-lg'>{t('Corporate Office')}</h6>
            <ul className='space-y-5'>
              <li className='flex items-center justify-center lg:justify-start'>
                <MdLocationOn size={25} className='mr-4' />
                8C53+M7P - Industrial Area 2 - Industrial Area - Sharjah - UAE
              </li>
              <li className='flex items-center justify-center lg:justify-start'>
                <FaPhone size={20} className='mr-4' />
                +971 6 533 0433
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
