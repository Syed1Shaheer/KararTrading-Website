import React from 'react';
import pipe from '../assets/pipe.png'; // Adjust path as necessary
import fasteners from '../assets/fasteners.png';
import fittings from '../assets/fittings.png';
import flanges from '../assets/flanges.png';
import gasket from '../assets/gasket.png';
import pipes_tubes from '../assets/pipes-and-tubes.png';
import sheets_plates from '../assets/sheets-&-plates.png';
import structural_steel from '../assets/structural-steel.png';
import valves from '../assets/valves.png';

const ProductShowcase = () => {
  return (
    <div className='w-full py-20 bg-[#f5f5f5] text-center px-6'>
      {/* Section Titles */}
      <div className='mb-16'>
        <h4 className='text-xl text-[#19418c] font-semibold uppercase tracking-widest'>Our Product Range</h4>
        <h1 className='text-5xl font-bold text-[#333] mt-4 mb-6'>Precision, Quality, Durability</h1>
        <p className='text-lg text-[#666] max-w-2xl mx-auto leading-relaxed'>
          Explore our extensive range of premium steel products, from pipes to sheets, engineered for exceptional performance and durability in every project.
        </p>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1240px] mx-auto'>
        {/* Row 1 */}
        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={fasteners} alt="Fasteners" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Fasteners</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={fittings} alt="Fittings" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Fittings</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={flanges} alt="Flanges" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Flanges</h3>
          </div>
        </div>

        {/* Row 2 */}
        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={gasket} alt="Gasket" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Gasket</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={pipes_tubes} alt="Pipes & Tubes" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Pipes & Tubes</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={sheets_plates} alt="Sheets & Plates" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Sheets & Plates</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={structural_steel} alt="Sheets & Plates" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Structural Steel</h3>
          </div>
        </div>

        <div className='relative group cursor-pointer'>
          <div className='flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border border-transparent transition-all duration-300 group-hover:border-[#19418c]/30 group-hover:scale-105'>
            <img src={valves} alt="Sheets & Plates" className='w-full h-64 object-contain mb-6 border-4 border-[#19418c]' />
            <h3 className='text-2xl font-medium text-[#333]'>Valves</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
