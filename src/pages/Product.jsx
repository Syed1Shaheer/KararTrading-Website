import React, { useState } from 'react';
import fasteners from '../assets/fasteners.png';
import fittings from '../assets/fittings.png';
import flanges from '../assets/flanges.png';
import gasket from '../assets/gasket.png';
import pipes_tubes from '../assets/pipes-and-tubes.png';
import sheets_plates from '../assets/sheets-&-plates.png';
import structural_steel from '../assets/structural-steel.png';
import valves from '../assets/valves.png';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Pipes & Tubes', img: pipes_tubes , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more' },
  { id: 2, name: 'Fittings', img: fittings , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more' },
  { id: 3, name: 'Flanges', img: flanges , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
  { id: 4, name: 'Gasket', img: gasket , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
  { id: 5, name: 'Fasteners', img: fasteners , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
  { id: 6, name: 'Sheets & Plates', img: sheets_plates , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
  { id: 7, name: 'Structural Steel', img: structural_steel , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
  { id: 8, name: 'Valves', img: valves , text: 'Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more Karar Trading Co. L.L.C, is a leading provider of high-quality Carbon, Stainless and Duplex steel Fittings, catering to the diverse needs of various industries. Our stock ranges consists from 1/2" to 24" in diffent materal grades and standards. We are Autorized Distributors and Stockists of world class Fittings mills: Interfit, Erne, Schulz, Thai Benkan, TK Corp, SK Bend, Delcorte and many more'},
];

const ProductShowcase = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));
  const navigate = useNavigate();

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index]; 
    setFlipped(newFlipped);
  };

  const handleleave = (index) => {
    const newFlipped = Array(products.length).fill(false);
    setFlipped(newFlipped);;
  };

  const handleClick = (product) => {
    navigate('/productdetails', { state: { product } });  // Pass product as state
   console.log("cliclek")
  };

  return (
    <div className='w-full py-20 bg-[#f5f5f5] text-center px-6'>
      <div className='mb-16'>
        <h4 className='text-xl text-[#19418c] font-semibold uppercase tracking-widest'>Our Product Range</h4>
        <h1 className='text-5xl font-bold text-[#333] mt-4 mb-6'>Precision, Quality, Durability</h1>
        <p className='text-lg text-[#666] max-w-2xl mx-auto leading-relaxed'>
          Explore our extensive range of premium steel products, from pipes to sheets, engineered for exceptional performance and durability in every project.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1040px] mx-auto'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className='relative w-full cursor-pointer mb-12'
            onClick={() => handleFlip(index)}  // Click to flip
            onMouseEnter={() => handleFlip(index)}  // Hover to flip
            onMouseLeave={() => handleleave(index)}  // Unhover to reset
            style={{ perspective: '1000px' }}
          >
            <div
              className='w-full h-[250px] relative transition-transform duration-500'
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front Side */}
              <div
                className=' absolute top-0 left-0 w-full h-full flex flex-col items-center p-8 rounded-xl bg-white shadow-lg border-4 border-[#93cced]'
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className='w-full h-48 max-h-32 object-contain mb-6 border-4 border-[#93cced]'
                />
                <h3 className='text-3xl font-bold text-[#19418c]'>{product.name}</h3>
              </div>

              {/* Back Side */}
              <div
                className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center rounded-xl  text-white shadow-lg border-4 border-black p-6'
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <button className='secondary px-8 py-4 rounded-lg hover:bg-[#142f68] text-lg' onClick={() => handleClick(product)}>Product Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ProductShowcase;
