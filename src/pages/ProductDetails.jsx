import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};  
  
  if (!product) {
    return <div className="text-center mt-20 text-2xl text-gray-600">No product found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] px-4 py-8 sm:px-10 sm:py-20">
      <div className="bg-white shadow-lg rounded-xl flex flex-col  max-w-5xl overflow-hidden border-2 border-gray-200 w-full">
        
        {/* Left Section - Product Details */}
        <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a3d7a] mb-4 sm:mb-6">{product.name}</h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
            


          <div className='p-4'>
    {product.id === 1 && 

<div className='p-2'>
<h1 className='text-lg font-bold mb-2'>Product Details</h1>

<div className='mb-4'>
    <h2 className='text-base font-semibold mb-1'>STAINLESS STEEL PIPES</h2>
    <p className='text-xs mb-1'>ASTM A312 304/304L/304H, TP316/TP316L/TP316I, TP321, TP317L, TP347/TP347H, TP310/TP310S, UNS 32305/2205/2507, ASTM A358/ A778/ A249/ A269/ A270</p>
    <p className='text-xs'><strong>TYPE:</strong> SEAMLESS / WELDED</p>
    <p className='text-xs'><strong>SIZE RANGE:</strong> 1/4” TO 60”</p>
    <p className='text-xs'><strong>WALL THICKNESS:</strong> SCH-5S TO SCH-XXS</p>
</div>

<div className='mb-4'>
    <h2 className='text-base font-semibold mb-1'>CARBON STEEL PIPES</h2>
    <p className='text-xs mb-1'>ASTM A106 GRB/ ASTM A53 GRB, API 5L GRB, API 5L X42, X46, X56, X60 X65, X70/PSL1/PSL2, ASTM A333 GRC</p>
    <p className='text-xs'><strong>TYPE:</strong> SEAMLESS / WELDED</p>
    <p className='text-xs'><strong>SIZE RANGE:</strong> 1/4” TO 60”</p>
    <p className='text-xs'><strong>WALL THICKNESS:</strong> SCH-5S TO SCH-XXS</p>
</div>

<div className='mb-4'>
    <h2 className='text-base font-semibold mb-1'>ALLOY STEEL PIPES</h2>
    <p className='text-xs mb-1'>ASTM-A335 P1, P2, P5, P9, P11, P12, P23, P91, P92, ASTM 213/ T2, T5, T9, T12, T22, T23, T91, T92</p>
    <p className='text-xs'><strong>TYPE:</strong> SEAMLESS / WELDED</p>
    <p className='text-xs'><strong>SIZE RANGE:</strong> 1/4” TO 60”</p>
    <p className='text-xs'><strong>WALL THICKNESS:</strong> SCH-5S TO SCH-XXS</p>
</div>

<div className='mb-4'>
    <h2 className='text-base font-semibold mb-1'>NICKEL ALLOY STEEL PIPES</h2>
    <p className='text-xs mb-1'>ALLOY 20, B464, B729, B474, B161, B165, B167, B407, B619, B622, ALLOY 200, 201, 400, 601, 625, 800, 800H, 800HT, 825, C276, C22, B2, 254SMO</p>
    <p className='text-xs'><strong>TYPE:</strong> SEAMLESS / WELDED</p>
    <p className='text-xs'><strong>SIZE RANGE:</strong> 1/4” TO 60”</p>
    <p className='text-xs'><strong>WALL THICKNESS:</strong> SCH-5S TO SCH-XXS</p>
</div>

<div>
    <h2 className='text-base font-semibold mb-1'>STEEL TUBES</h2>
    <p className='text-xs mb-1'>CARBON STEEL TUBING, STAINLESS STEEL TUBING 304/304L, STAINLESS STEEL TUBING 316/316L, DUPLEX STAINLESS STEEL TUBING, NICKEL ALLOY TUBING, TITANIUM TUBING (GRADE 2), TITANIUM TUBING (GRADE 12), TITANIUM TUBING (GRADE 16)</p>
    <p className='text-xs'><strong>SIZE RANGE:</strong> 4.76 MM OD TO 203.2 MM OD.</p>
    <p className='text-xs'><strong>WALL THICKNESS:</strong> 0.7MM TO 6.0MM</p>
</div>
</div>

    }
    {product.id === 2 && 

<div className='p-4 text-sm'>
<h2 className='text-xl font-semibold mb-4'>Product Details</h2>

{/* Butt-Weld Fittings Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>BUTT-WELD FITTINGS</h3>
    <p><strong>STAINLESS STEEL:</strong> ASTM A403 WP 304/ 304L/304H/316/ 316L/ 321/ 347 ETC.</p>
    <p><strong>CARBON STEEL:</strong> ASTM A234WPB/ A420 WPL3/ A420 WPL6/ MSS-SP-75 WPHY 42/46/52/56/60/65/70.</p>
    <p><strong>ALLOY STEEL:</strong> ASTM A234 WPI/ WP5/ WP9/ WP11/ WP22/ WP91 ETC.</p>
    <p><strong>NICKEL ALLOYS:</strong> MONEL, NICKEL, INCONEL, HASTELLOY, TITANIUM, TANTALUM AND ALLOY – 20 ETC.</p>
    <p><strong>TYPES:</strong> ELBOW 90°, ELBOW 45°, EQUAL TEE, CAP, COLLAR, STUB-END, INSERT, CROSS, CONCENTRIC REDUCER, ECCENTRIC REDUCER</p>
    <p><strong>SIZE:</strong> ¼” NB TO 32” NB</p>
    <p><strong>SEAM:</strong> SEAMLESS/WELDED</p>
    <p><strong>WALL THICKNESS:</strong> SCH-5S TO SCH-XXS</p>
</div>

{/* Forged Fittings Section */}
<div>
    <h3 className='text-lg font-medium mb-2'>FORGED FITTINGS</h3>
    <p><strong>STAINLESS STEEL:</strong> ASTM A182 F304/F304L, F316/F316L, F321/F321H, F347/F347H, F410, F440, F904L, T304, T316, T347, B247 ETC.</p>
    <p><strong>CARBON STEEL:</strong> ASTM A105, C22.8/ ASTM A350 LF2, LF3, LF6</p>
    <p><strong>ALLOY STEEL:</strong> ASTM A182 F1, F5, F9, F11, F12, F22, F91, ASTM A694 F42, F52, F60, F65, F70, ASTM A182 F44, F51, F53, F55</p>
    <p><strong>NICKEL ALLOYS:</strong> MONEL, NICKEL, INCONEL, HASTELLOY, TITANIUM, TANTALUM AND ALLOY – 20 ETC.</p>
    <p><strong>TYPES:</strong> ELBOW 90°, ELBOW 45°, EQUAL TEE, CAP, PLUGS & COUPLINGS ETC.</p>
    <p><strong>SIZE:</strong> ¼” NB TO 3” NB</p>
    <p><strong>RATING:</strong> 3000 LBS, 6000 LBS</p>
</div>
</div>


    }
    {product.id === 3 &&

<div className='p-4 text-sm'>
<h2 className='text-xl font-semibold mb-4'>Product Details</h2>

{/* Stainless Steel Flanges Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL FLANGES</h3>
    <p><strong>Specifications:</strong> ASTM A182 F304/F304L, F316/F316L, F321/F321H, F347/F347H, F410, F440, F904L, T304, T316, T347, B247</p>
</div>

{/* Carbon Steel Flanges Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>CARBON STEEL FLANGES</h3>
    <p><strong>Specifications:</strong> ASTM A105, ASTM A350 LF2</p>
</div>

{/* Alloy Steel Flanges Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>ALLOY STEEL FLANGES</h3>
    <p><strong>Specifications:</strong> ASTM A182 F1, F5, F9, F11, F12, F22, F91, ASTM A694 F42, F52, F60, F65, F70, ASTM A182 F44, F51, F53, F55</p>
</div>

{/* Nickel Alloy Steel Flanges Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>NICKEL ALLOY STEEL FLANGES</h3>
    <p><strong>Specifications:</strong> ALLOY 20 B462, B160, B164, B166, B408, AND B574, ALLOY C, ALLOY C276, B2, A200, A400, AK500, A600, A625, A800, A825</p>
</div>

{/* Types Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>TYPE</h3>
    <p>FORGED FLANGES, BLIND FLANGES, SPECTACLE BLINDS, HIGH HUB BLINDS, ORIFICE FLANGES, SLIP-ON FLANGES, SOCKET WELD FLANGES, WELD NECK FLANGES, FLAT FLANGES, REDUCING & THREADED FLANGES</p>
</div>

{/* Size and Rating Section */}
<div>
    <p><strong>SIZE:</strong> 1/2” NB TO 60” NB</p>
    <p><strong>RATING:</strong> 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS</p>
</div>
</div>
     
     }
    {product.id === 4 && 

<div className='p-4 text-sm'>
    <h2 className='text-xl font-semibold mb-4'>Product Details</h2>

    {/* Stainless Steel Gaskets Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL GASKETS</h3>
        <p><strong>Specifications:</strong> ASTM A182 F304, F304L/F304H, F316L/F316H, F321, F347, F410 GR. F5, GR. F51</p>
    </div>

    {/* Carbon Steel Gaskets Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>CARBON STEEL GASKETS</h3>
        <p><strong>Specifications:</strong> SOFT IRON-D, CRS</p>
    </div>

    {/* Alloy Steel Gaskets Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>ALLOY STEEL GASKETS</h3>
        <p><strong>Specifications:</strong> N7M (HASTELLOY B), HASTELLOY B2, C276, ASTM A182 UNS S31803</p>
    </div>

    {/* Nickel Alloy Gaskets Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>NICKEL ALLOY GASKETS</h3>
        <p><strong>Specifications:</strong> ASTM B564 UNS N06625 (INCONOL 625, 600, 825, 800, X750) ASTM B564 UNS N08825 (INCOLOY 825)</p>
    </div>

    {/* Types Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>TYPES</h3>
        <p>SPIRAL WOUND GASKET, REINFORCED GRAPHITE GASKET, PTFE GASKET, ASBESTOS & NON-ASBESTOS GASKET, GRAPHITE RING, PACKING RING, CORRUGATED METAL GASKET, RUBBER GASKET, FIBER GLASS GASKET, METAL JACKETED GASKET</p>
    </div>

    {/* Rating and Sizes Section */}
    <div>
        <p><strong>RATING:</strong> 150 LBS, 300 LBS, 600 LBS, 800 LBS, 900 LBS, 1500 LBS, 2500 LBS</p>
        <p><strong>SIZES:</strong> 1/4 INCH UPTO 60 INCH</p>
    </div>
</div>

    }
    {product.id === 5 &&

<div className='p-4 text-sm'>
<h2 className='text-xl font-semibold mb-4'>Product Details</h2>

{/* Stainless Steel Fasteners Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL FASTENERS</h3>
    <p><strong>Specifications:</strong> ASTM / ASME A193 B8 (304) B8C (SS 347), B8M (SS 316) 8T (SS 321), A2, A4 / ASTM / ASME A 194 B8 (304), B8C (SS 347), B8M (SS 316), B8T (SS 321)</p>
</div>

{/* Carbon Steel Fasteners Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>CARBON STEEL FASTENERS</h3>
    <p><strong>Specifications:</strong> ASTM A193, A194 GR. B7, B7M, B16, 2HM, 2H</p>
</div>

{/* Alloy Steel Fasteners Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>ALLOY STEEL FASTENERS</h3>
    <p><strong>Specifications:</strong> ASTM A350 LF3, A182 F54/F5, A189 F9, F22, F91, A352 LF3, A217 C5, C12, WC6, WC9, C12A</p>
</div>

{/* Nickel Alloy Steel Fasteners Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>NICKEL ALLOY STEEL FASTENERS</h3>
    <p><strong>Specifications:</strong> ASTM / ASME SB160, SB164, SB 425, SB166, SB446, SB574, SB472</p>
</div>

{/* Types Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>TYPES</h3>
    <p>BOLT & NUTS, FINISHED HEX NUT, FORGED NUTS, HEAVY NUTS, HEX BOLTS, STUD BOLTS, HEXAGONAL BOLTS, HEXAGONAL NUT, STUD & CUP NUTS, GASKET NUTS</p>
</div>

{/* Size Section */}
<div>
    <p><strong>SIZE:</strong> 1/4” UPTO 2-1/2”</p>
</div>
</div>


     }
    {product.id === 6 &&


     <div className='p-4 text-sm'>
    <h2 className='text-xl font-semibold mb-4'>Product Details</h2>

    {/* Stainless Steel Plates Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL PLATES</h3>
        <p><strong>Specifications:</strong> ASTM A240 T304, T316, T321, T347 B221</p>
        <p><strong>Thickness:</strong> UPTO 50MM</p>
    </div>

    {/* Carbon Steel/Mild Steel Plates Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>CARBON STEEL / MILD STEEL PLATES</h3>
        <p><strong>Specifications:</strong> ASTM A36, A203, GRA, GRB, GRD, GRE, A283, A516, GR60, GR65, GR70, A517 GRB, GRE, A573 GR 65, GR70, Q235B</p>
        <p><strong>Thickness:</strong> UPTO 50MM</p>
    </div>

    {/* Alloy Steel Plates Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>ALLOY STEEL PLATES</h3>
        <p><strong>Specifications:</strong> ASTM A204, GRB A387, GR11, GR22, GR5, GR9, AND A203 GRD</p>
        <p><strong>Thickness:</strong> UPTO 50MM</p>
    </div>

    {/* Nickel Alloy Plates Section */}
    <div className='mb-6'>
        <h3 className='text-lg font-medium mb-2'>NICKEL ALLOY PLATES</h3>
        <p><strong>Specifications:</strong> ALLOY 20 B463, B162, B127, B4C9, AND B575</p>
        <p><strong>Thickness:</strong> UPTO 50MM</p>
    </div>
</div>

     
     
     }
    {product.id === 7 && 

<div className='p-4 text-sm'>
<h2 className='text-xl font-semibold mb-4'>Product Details</h2>

{/* Stainless Steel Chequered Plates Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL CHEQUERED PLATES</h3>
    <p><strong>Thickness:</strong> 1.5 TO 10MM</p>
</div>

{/* MS Chequered Plate Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>MS CHEQUERED PLATE</h3>
    <p><strong>Thickness:</strong> 2MM TO 12MM</p>
</div>

{/* MS Square Pipe and Tubing Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>MS SQUARE PIPE AND TUBING</h3>
    <p><strong>Size Range:</strong> 1/2″ - 6″</p>
</div>

{/* MS Round Pipe and Tube Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>MS ROUND PIPE AND TUBE</h3>
    <p><strong>Size Range:</strong> 1/2″ – 12″</p>
</div>

{/* MS Angle and Flat Bar Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>MS ANGLE AND FLAT BAR</h3>
    <p><strong>Size Range:</strong> 1/2″ – 8″</p>
</div>

{/* Galvanized Sheets Section */}
<div className='mb-6'>
    <h3 className='text-lg font-medium mb-2'>GALVANIZED SHEETS</h3>
    <p><strong>Thickness:</strong> 0.4MM TO 3MM</p>
</div>
</div>


    }
    {product.id === 8 &&
    
     <div className='p-4 text-sm'>
     <h2 className='text-xl font-semibold mb-4'>Product Details</h2>
 
     {/* Stainless Steel Valves Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>STAINLESS STEEL VALVES</h3>
         <p><strong>Materials:</strong> ASTM A182 F304/F304L, A182 F316/F316L, A182 F321, F247, F44 (6MO), A351 CF8/CF3, A351 CF8M/CF3M, F351 3F8X, CR3MCUN CN7M</p>
     </div>
 
     {/* Carbon Steel Valves Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>CARBON STEEL VALVES</h3>
         <p><strong>Materials:</strong> ASTM A216 WCB, WCC, ASTM A352, LCB/LCC, ASTM A105/A105N, A350 LF2</p>
     </div>
 
     {/* Alloy Steel Valves Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>ALLOY STEEL VALVES</h3>
         <p><strong>Materials:</strong> ASTM A350 LF3, A182 F54/F5, A189 F9, F22, F91, A352 LF3, A217 C5, C12, WC6, WC9, C12A</p>
     </div>
 
     {/* Nickel Alloy Valves Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>NICKEL ALLOY VALVES</h3>
         <p><strong>Materials:</strong> ASTM B564 NO8825, NO6625, NO4400</p>
     </div>
 
     {/* Valve Types Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>TYPES</h3>
         <p>Gate Valve, Globe Valve, Ball Valve, Check Valve, Butterfly Valves, Plug Valves, Strainers Valve, Control Valves, Pressure Relief & Safety Valves, Bellows Seal Valves, Actuators Valves</p>
     </div>
 
     {/* Valve Ratings Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>RATING</h3>
         <p>150 LBS, 300 LBS, 600 LBS, 800 LBS, 900 LBS, 1500 LBS, 2500 LBS</p>
     </div>
 
     {/* Valve Sizes Section */}
     <div className='mb-6'>
         <h3 className='text-lg font-medium mb-2'>SIZES</h3>
         <p>1/2 INCH UP TO 60 INCH</p>
     </div>
 </div>
 
     }
</div>


          













          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center mr-4 ml-4 mb-8">
  <img 
    src={product.img} 
    alt={product.name} 
    className=" sm:h-full object-cover p-4 shadow-lg border-4"
  />
</div>
      </div>
    </div>
  );
}

export default ProductDetails;
