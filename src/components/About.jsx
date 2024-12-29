import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/ABout.jpg'

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-32 px-6 min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <h3 className="text-2xl text-gray-700">
            Qualities & Expertise of Karar Trading Co LLC.
          </h3>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
          At Karar Trading Co LLC, we pride ourselves on our commitment to quality and reliability. All our products are sourced from reputed manufacturers who adhere to international standards, ensuring durability and performance in the most demanding environments. With a strong focus on customer satisfaction, we provide tailor-made solutions to meet specific project requirements, along with timely delivery and exceptional after-sales support. Our team of experts brings years of industry experience, offering technical guidance to help you select the right products for your application. Whether you’re looking for specialized fittings or bulk supplies, we are here to provide efficient and cost-effective solutions.Choose Heed Steel Pakistan Co. for all your stainless & carbon steel needs and experience unmatched service and product excellence.
          </p>
        </div>

        <div className={`transition-opacity duration-700 delay-200 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-600 leading-relaxed">
          At Karar Trading Co LLC, we pride ourselves on our commitment to quality and reliability. All our products are sourced from reputed manufacturers who adhere to international standards, ensuring durability and performance in the most demanding environments. With a strong focus on customer satisfaction, we provide tailor-made solutions to meet specific project requirements, along with timely delivery and exceptional after-sales support. Our team of experts brings years of industry experience, offering technical guidance to help you select the right products for your application. Whether you’re looking for specialized fittings or bulk supplies, we are here to provide efficient and cost-effective solutions.Choose Heed Steel Pakistan Co. for all your stainless & carbon steel needs and experience unmatched service and product excellence.
          </p>
          <Link
            to="/product"
            className="mt-6 inline-block bg-[#19418c] text-white py-2 px-4 rounded-md hover:bg-[#19418c]/90"
          >
            View Products
          </Link>
        </div>

        <div className={`transition-opacity duration-700 delay-400 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <img
          src={pic}
            alt="Refineries"
            className="rounded-lg shadow-lg h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
