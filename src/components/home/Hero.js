import React from 'react'
import threeAppScreens from "../../assets/images/three-app-screens.png"
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function Hero() {
    return (
        <section className='w-full relative'>
            <div className='absolute z-[-1] w-full h-[572px] rounded-bl-[300px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
            </div>
            <Core.Container>
                <div className="flex justify-between items-start h-[720px] pt-[130px]">
                    <div>
                        <h1 className="max-w-[540px] text-[52px] text-[#fff] font-bold leading-[70px]">
                            Helping you protect, and understand Credit Health
                        </h1>
                        <p className='max-w-[520px] text-[20px] text-[#fff] leading-[30px] pt-4 pb-6'>
                            Miro is your team's visual platform to connect, collaborate, and create — together.
                        </p>
                        <Core.Button greenIconicLg>Sign up free</Core.Button>
                    </div>
                    <div className='mr-[-200px]'>
                        <img className=" scale-[1] mt-[-60px]" src={threeAppScreens} alt="logo" />
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default Hero