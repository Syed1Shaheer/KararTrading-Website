import React from 'react';
import backgroundImage from '../assets/pipe.png'; // Adjust the path according to your project structure
import { FaHandPointRight } from "react-icons/fa";
import { GiBulletBill } from "react-icons/gi";

const Cards = () => {
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
                <h1 className='text-5xl font-bold text-white'>Sector we work in.</h1>
            </div>

            {/* Cards Section */}
            <div className='relative z-10 text-white max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 xl:max-w-[1500px] lg:max-w-[1400px]'>
                <div className='w-full shadow-xl flex flex-col p-8 my-4 rounded-[20px] hover:scale-105 duration-300 primary border border-gray-300 cursor-pointer'>

                    {/* Commercial Section */}
                    <div className='flex items-start gap-4 mb-8 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-5xl' />
                        {/* <FaHandPointRight className='text-3xl text-white bg-[#19418c] p-2 rounded-full hover:bg-white hover:text-[#19418c] transition-all duration-300' /> */}
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Commercial</h3>
                            <p>
                                Our steel solutions enhance durability and aesthetics for commercial properties.
                            </p>
                        </div>
                    </div>

                    {/* Retail Section */}
                    <div className='flex items-start gap-4 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-4xl' />
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Retail</h3>
                            <p>
                                We supply secure and stylish steel products for retail spaces.
                            </p>
                        </div>
                    </div>

                </div>





                <div className='w-full shadow-xl flex flex-col p-8 my-4 rounded-[20px] hover:scale-105 duration-300 primary border border-gray-300 cursor-pointer'>

                    {/* Commercial Section */}
                    <div className='flex items-start gap-4 mb-8 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-5xl' />
                        {/* <FaHandPointRight className='text-3xl text-white bg-[#19418c] p-2 rounded-full hover:bg-white hover:text-[#19418c] transition-all duration-300' /> */}
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Industrial</h3>
                            <p>
                            Robust steel products designed for heavy use in industrial environments.                            </p>
                        </div>
                    </div>

                    {/* Retail Section */}
                    <div className='flex items-start gap-4 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-4xl' />
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Educational</h3>
                            <p>
                            Safe and sustainable steel structures for educational institutions.

</p>
                        </div>
                    </div>

                </div>


                <div className='w-full shadow-xl flex flex-col p-8 my-4 rounded-[20px] hover:scale-105 duration-300 primary border border-gray-300 cursor-pointer'>

                    {/* Commercial Section */}
                    <div className='flex items-start gap-4 mb-8 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-5xl' />
                        {/* <FaHandPointRight className='text-3xl text-white bg-[#19418c] p-2 rounded-full hover:bg-white hover:text-[#19418c] transition-all duration-300' /> */}
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Residential</h3>
                            <p>
                            Resilient and architecturally striking steel solutions for homes.</p>
                        </div>
                    </div>

                    {/* Retail Section */}
                    <div className='flex items-start gap-4 border-2 border-black p-4 rounded-xl hover:bg-[#19418c] hover:text-white hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300'>
                        <GiBulletBill className='text-4xl' />
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Engineering</h3>
                            <p>
                            Precision-engineered steel products for complex engineering projects.</p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Cards;
