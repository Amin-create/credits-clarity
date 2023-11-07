import React, { useState } from 'react';
import logo2 from "../assets/images/logo/logo.svg";
import { Core } from '../components';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link } from "react-router-dom";
import styles from '../style';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="border-b-[6px] border-[#09EC92] bg-white dark:bg-gray-800 py-7">
        <Core.Container>
          <div className="flex items-center justify-between h-4 lg:h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0 pr-10" href="/">
                <img className="w-[70px] lg:w-[130px]" src={logo2} alt="logo" />
              </a>
              <div className="hidden lg:block">
                <div className="flex items-baseline ml-10 space-x-5">
                  <a className="text-[18px] text-[#09EC92] font-bold py-2">
                    <Link to="/">Home</Link>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <Link to="/about">About Us</Link>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <Link to="/features">Features</Link>
                  </a>
                  <a className={`text-[18px] ${styles.linkHover1} font-normal px-3 py-2`}>
                    <Link to="/contact">Contact Us</Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center gap-x-3 ml-4 lg:ml-6">
                <a className={` ${styles.linkHover1}  `}>
                  <Core.Button blackText>
                    <Link to="/login">Sign in</Link>
                  </Core.Button>
                </a>
                <a className={` ${styles.linkHover1}  `}>
                  <Core.Button simpleGreen>
                    <Link to="/signup">Sign up free&nbsp; →</Link>
                  </Core.Button>
                </a>
              </div>
            </div>
            <div className="flex -mr-2 lg:hidden justify-end">
              <div className='w-[60px ]'>
                {mobileMenuOpen ? "" : <button
                  onClick={toggleMobileMenu}
                  className="text-dark-blue dark:text-white hover:text-gray-300 text-[24px]"
                >
                  <HiMenu />
                </button>}
              </div>
            </div>
          </div>
        </Core.Container>
      </nav>
      {/* Mobile Navigation Drawer */}
      <div
        className={`border fixed top-0 left-0 w-64 h-full z-10 transform transition-transform ease-in-out duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="w-full h-screen bg-white dark:bg-gray-800 p-6">
          <div className='flex justify-between'>

            <img className="w-[100px]" src={logo2} alt="logo" />
            {mobileMenuOpen ? <button
              onClick={toggleMobileMenu}
              className="text-dark-blue dark:text-white hover:text-gray-300 text-[24px]"
            >
              <AiOutlineClose />
            </button> : ""}
          </div>
          <ul className="">
            <li>
              <a className="block text-[18px] text-[#09EC92] font-bold py-4">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-4`}>
                <Link to="/about">About Us</Link>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-4`}>
                <Link to="/features">Features</Link>
              </a>
            </li>
            <li>
              <a className={`block text-[18px] ${styles.linkHover1} font-normal py-4`}>
                <Link to="/contact">Contact Us</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
