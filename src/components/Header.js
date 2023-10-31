import React, { useState } from 'react';
import logo2 from "../assets/images/logo/logo.svg";
import { Core } from '../components';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="border-b-[6px] border-[#09EC92] bg-white dark:bg-gray-800 py-7">
        <Core.Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0 pr-10" href="/">
                <img className="w-[130px]" src={logo2} alt="logo" />
              </a>
              <div className="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-5">
                  <a class="text-[18px] text-[#09EC92] font-bold py-2" href="/#">
                    Home
                  </a>
                  <a class="text-[18px] hover:text-[#09EC92] font-normal px-3 py-2" href="/#">
                    About Us
                  </a>
                  <a class="text-[18px] hover:text-[#09EC92] font-normal px-3 py-2" href="/#">
                    Features
                  </a>
                  <a class="text-[18px] hover:text-[#09EC92] font-normal px-3 py-2" href="/#">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div class="flex items-center gap-x-3 ml-4 md:ml-6">
                <button type="button" class="w-full text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                  Sign in
                </button>
                <button type="button" class="text-[#fff] text-[16px] font-medium whitespace-nowrap rounded-full bg-[#09EC92] px-6 py-3  ">
                  Sign up free →
                </button>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <div className='w-[60px]'>
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
              <a className="block text-[18px] text-[#09EC92] font-bold py-4" href="/#">
                Home
              </a>
            </li>
            <li>
              <a className="block text-[18px] hover:text-[#09EC92] font-normal py-4" href="/#">
                About Us
              </a>
            </li>
            <li>
              <a className="block text-[18px] hover:text-[#09EC92] font-normal py-4" href="/#">
                Features
              </a>
            </li>
            <li>
              <a className="block text-[18px] hover:text-[#09EC92] font-normal py-4" href="/#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
