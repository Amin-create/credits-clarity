import React from 'react'
// import logo from "../../assets/images/logo/logo.png"
import logo2 from "../../assets/images/logo/logo.svg"

function Header() {
  return (
    <div>
      <nav class="border-b-[6px] border-[#09EC92] bg-white dark:bg-gray-800 py-7">
        <div class="mx-auto max-w-[1170px]">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0 pr-10" href="/">
                <img class="w-[130px]" src={logo2} alt="logo" />
              </a>
              <div class="hidden md:block">
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
            <div class="block">
              <div class="flex items-center gap-x-3 ml-4 md:ml-6">
                <button type="button" class="w-full text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                  Sign in
                </button>
                <button type="button" class="text-[#fff] text-[16px] font-medium whitespace-nowrap rounded-full bg-[#09EC92] px-6 py-3  ">
                  Sign up free →
                </button>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </nav>
    </div>

  )
}

export default Header