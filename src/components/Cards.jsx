import React from 'react';
import backgroundImage from '../assets/pipe.png'; // Adjust the path according to your project structure
import { FaHandPointRight } from "react-icons/fa";
import { GiBulletBill } from "react-icons/gi";
import factoryPIC from '../assets/pipe.png'
import { FcFactory } from "react-icons/fc";
import { TbBuildingFactory } from "react-icons/tb";
import { useTranslation } from 'react-i18next';


const Cards = () => {
    const { t } = useTranslation();
    return (
        <div className='relative w-full py-[10rem] px-4 min-h-[700px]'>

            {/* Background image */}
            <div
                className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Blue overlay with opacity */}
            <div className='absolute top-0 left-0 w-full h-full bg-[#19418c] opacity-40'></div>

            {/* Main heading */}
            <div className='relative z-10 text-center mb-16'>
                <h1 className='text-5xl font-bold text-white'>{t('Sector we work in.')}</h1>
            </div>

            {/* Cards Section */}
            <div className='relative z-10 text-white max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8 xl:max-w-[1500px] lg:max-w-[1400px]'>

                <div className='w-full shadow-xl flex flex-col p-8 my-4 rounded-[20px] hover:scale-105 duration-300 primary border border-gray-300 cursor-pointer'>

                    {/* Commercial Section */}
                    <div className='flex items-start gap-4 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-5xl' />
                        {/* <FaHandPointRight className='text-3xl text-white bg-[#19418c] p-2 rounded-full hover:bg-white hover:text-[#19418c] transition-all duration-300' /> */}
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>{t('Industrial')}</h3>
                            <p className='font-bold'>
                                {t('Karar Trading Co LLC serves a wide array of industries with high-quality steel products, including:')}
                            </p>
                            <div className='m-2 p-2 gap-4 flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Textile: Durable materials for machinery and infrastructure.')}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Food: Hygienic and corrosion-resistant steel solutions.')}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Oil & Gas Refineries: Reliable components for high-pressure and critical operations.')}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Steel Manufacturing: Premium-grade steel for fabrication and production.')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col p-8 my-4 rounded-[20px] hover:scale-105 duration-300 primary border border-gray-300 cursor-pointer'>


                    <div className='flex items-start gap-4 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-4xl' />
                        <div>
                            <h3 className='text-2xl font-semibold mb-6'>{t('Engineering')}</h3>
                            <p className='font-bold'>
                                {t('We specialize in supplying engineering projects with:')}
                            </p>
                            <div className='mx-2 my-8 p-2 gap-6 flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Structural steel for construction and design.')}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Precision-crafted components for industrial applications.')}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbBuildingFactory />
                                    <p>{t('Customized steel solutions tailored to unique engineering challenges.')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
