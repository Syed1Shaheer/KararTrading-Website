import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/aboutus.jpg'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
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
    <section ref={sectionRef} className="bg-gray-100 py-16 px-6 min-h-[20vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className={`transition-opacity duration-50 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-6">{t('About Us')}</h2>
          <h3 className="text-2xl text-gray-700">
            {t('Qualities & Expertise of Karar Trading Co LLC.')}
          </h3>
          <p className="text-gray-600 leading-relaxed mt-4">
            {t('Welcome to Karar Trading Co. LLC – a name synonymous with 35 years of excellence in the steel industry. As the UAE’s leading importer and stockist, we are proud to be a trusted partner for industries across the Middle East and beyond. Our extensive inventory is sourced from globally renowned manufacturers in Europe, Japan, the USA, South Korea, and China, ensuring superior quality and performance.')}          </p>
        </div>

        <div className={`transition-opacity duration-50  ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-600 leading-relaxed ">
            {t('For over three decades, we have been at the forefront of serving critical sectors such as oil and gas, fertilizers, textiles, marine, offshore, and manufacturing. Our comprehensive product range includes premium stainless steel, carbon steel, and alloy steel pipes, fittings, flanges, valves, gaskets, and fasteners, designed to meet the most stringent industrial demands. Our reputation is built on reliability and responsiveness. We not only fulfill urgent material needs within the Middle East but also extend our services to South East Asia and other regions with seamless export solutions from our ready-to-ship stock.')}
          </p>
          <Link
            to="/product"
            className="mt-6 inline-block bg-[#19418c] text-white py-2 px-4 rounded-md hover:bg-[#19418c]/90"
          >
            {t('View Products')}
          </Link>
        </div>

        <div className={`transition-opacity duration-50 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={pic}
            alt="Refineries"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
