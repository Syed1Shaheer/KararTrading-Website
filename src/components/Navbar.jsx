import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoupdated.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const location = useLocation();

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
    <div className='sticky top-0 left-0 right-0 z-50 bg-[#93cced] navbar'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#19418c] font-semibold '>
        <Link to='/' className='w-full text-3xl font-bold'>
          <img src={logo} className='h-36 w-auto' alt='logo' />
        </Link>
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('About')}>About</li>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('Progress')}>Progress</li>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('cards')}>Expertise</li>
          <li className='p-4 cursor-pointer' onClick={() => scrollToSection('footer')}>Contact</li>
          <li className='p-4 cursor-pointer'>
            <Link to='/product'>Products</Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <ul className={nav ? 
          'fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500' 
          : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-2'>
            <img src={logo} className='h-24 w-auto' alt='logo' />
          </h1>
          <li className='p-4' onClick={() => scrollToSection('About')}>About</li>
          <li className='p-4' onClick={() => scrollToSection('Progress')}>Progress</li>
          <li className='p-4' onClick={() => scrollToSection('cards')}>Expertise</li>
          <li className='p-4' onClick={() => scrollToSection('footer')}>Contact</li>
          <li className='p-4'>
            <Link to='/product' onClick={() => setNav(false)} >Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
