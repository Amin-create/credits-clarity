import React from 'react'
import threeAppScreens from "../../assets/images/bg/three-app-screens.png"
import { FiChevronRight } from 'react-icons/fi';

function Hero() {
    return (
        <section className='w-full       relative
        '>
            <div className='absolute z-[-1] w-full h-[572px] rounded-bl-[300px] bg-gradient-to-r from-[#1988F1] via-purple-5 00 to-[#09EC92]'>
            </div>
            <div class="max-w-[1170px] mx-auto">
                <div class="flex justify-between items-start h-[720px] pt-[130px]">
                    <div>


                        <h1 class="max-w-[540px] text-[52px] text-[#fff] font-bold leading-[70px]">
                            Helping you protect, and understand Credit Health
                        </h1>
                        <p className='max-w-[520px] text-[20px] text-[#fff] leading-[30px] pt-4 pb-6'>
                            Miro is your team's visual platform to connect, collaborate, and create — together.
                        </p>
                        <button type="button" class="flex justify-between items-center w-[311px] text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-8 pr-1 py-1  ">
                            Sign up free
                            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                                <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                    <FiChevronRight />
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className='mr-[-200px]'>
                        <img class=" scale-[1] mt-[-60px]" src={threeAppScreens} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero