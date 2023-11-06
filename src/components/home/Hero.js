import React from 'react';
import { Core } from '../../components';

function Hero({ data }) {
    return (
        <section className='w-full relative overflow-hidden'>
            <div className='absolute z-[-1] w-full h-[420px] md:h-[572px] rounded-bl-[120px] md:rounded-bl-[300px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
            </div>
            <Core.Container>
                <div className="flex justify-between items-start h-[460px] md:h-[720px] pt-[40px] md:pt-[130px]">
                    <div>
                        <h1 className="max-w-full md:max-w-[540px] text-[40px] md:text-[52px] text-[#fff] font-bold leading-[50px] md:leading-[70px]">
                            {data?.heading}
                        </h1>
                        <p className='max-w-[520px] text-[20px] text-[#fff] leading-[30px] pt-4 pb-6'>
                            {data?.text}
                        </p>
                        <Core.Button greenIconicLg>Sign up free</Core.Button>
                    </div>
                    <div className='mr-[-200px] hidden lg:block'>
                        <img className=" scale-[1] mt-[-60px]" src={data?.image} alt="logo" />
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default Hero