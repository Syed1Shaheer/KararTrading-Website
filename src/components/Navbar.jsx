import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoupdated.png';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = sectionPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setNav(false);
  };

  return (
    <div className='sticky top-0 left-0 right-0 z-50 bg-white navbar shadow-xl shadow-gray-600' >



      <div className='flex justify-between items-center h-24 w-full text-[#19418c] font-semibold'> {/* Removed max-w */}
      <div onClick={handleNav} className='block ml-4 md:hidden'>
          {!nav && <AiOutlineMenu size={20} />}
        </div>
        
        <Link to='/' className='flex items-center'>
          <img src={logo} className={`h-24 w-auto ml-0 md:h-36 ${nav ? 'hidden' : ''}`} alt='logo' /> {/* Ensures no margin */}
        </Link>
        <ul className='hidden md:flex w-[800px] justify-left items-center'>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('About')}>{t('About')}</li>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('cards')}>{t('Expertise')}</li>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('footer')}>{t('Contact')}</li>

          <li className='p-4 cursor-pointer'>
            <Link to='/product'>{t('Products')}</Link>
          </li>
          <li className='p-4 cursor-pointer'>
            <a
              href='/assets/catalog.pdf'
              download
              className='bg-[#19418c] rounded-md font-sm mx-auto py-2 px-4 text-white hover:bg-[#19418c]/90 
               block text-center sm:inline-block sm:py-3 sm:px-6 md:py-2 md:px-4 text-[10px] lg:py-3 lg:px-6'
            >

              {t('Download Catalog')}
            </a>
          </li>
          <li className='p-4 cursor-pointer'>
            <button onClick={toggleLanguage} className="bg-black rounded-md font-sm mx-auto py-3 px-8 text-white hover:bg-black/70 text-[12px]">
              {i18n.language === 'en' ? 'عربي' : 'English'}
            </button>
          </li>
        </ul>

        <div onClick={handleNav} className='block mr-4 md:hidden'>
          {nav && <AiOutlineClose size={20} /> }
        </div>

        {/* Mobile Menu */}
        <ul
          className={ 
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-2'>
            <img src={logo} className='h-24 w-auto ml-0' alt='logo' /> {/* Ensures no margin */}
          </h1>
          <li className='p-4' onClick={() => scrollToSection('About')}>About</li>
          <li className='p-4' onClick={() => scrollToSection('cards')}>Expertise</li>
          <li className='p-4' onClick={() => scrollToSection('footer')}>Contact</li>
          <li className='p-4'>
            <Link to='/product' onClick={() => setNav(false)}>Products</Link>
          </li>
          <li className='p-4'>
            <a
              href='/assets/catalog.pdf'
              download
              className='bg-[#19418c] rounded-md font-sm mx-auto py-2 px-4 text-white hover:bg-[#19418c]/90 
               text-[12px] '
            >
              Download Catalog
            </a>
          </li>
          <li className='p-4 cursor-pointer'>
            <button onClick={toggleLanguage} className='bg-black rounded-md font-sm mx-auto py-2 px-4 text-white hover:bg-black/70 text-[12px] '>
              {i18n.language === 'en' ? 'عربي' : 'English'}
            </button>
          </li>
        </ul>
      </div>
      {/* Language Switcher Button */}

    </div>

  );
};

export default Navbar;
