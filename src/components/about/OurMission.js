import React from 'react';
import { Core } from '..';

function OurMission({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-x-16 pt-8 md:pt-14 pb-10 md:pb-20">
                    <div className='relative flex justify-center items-center w-full md:w-[45%] pr-0 md:pr-14 pb-8'>
                        <div className='absolute bottom-0 z-[-1] w-full h-[250px] md:h-[42%] rounded-bl-[110px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
                        </div>
                        <img data-aos="fade-up" className="w-[85%] md:w-full" src={data?.image} alt="logo" />
                    </div>
                    <div className='flex flex-col gap-y-8 w-full md:w-[55%]'>
                        <h6 data-aos="fade-left" className="text-gray-1 text-[18px] leading-[] font-bold mt-5"
                        >{data?.subTitle}
                        </h6>
                        <h1 data-aos="fade-left" className="text-[26px] md:text-[36px] leading-[30px] md:leading-[40px] font-bold pr-0 md:pr-5">
                            {data?.heading}
                        </h1>
                        <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                            {data?.text}
                        </p>
                        <div className='flex justify-start'>
                            <div className='w-[50%]'>
                                <h2 data-aos="fade-left" className="text-green text-[40px] md:text-[52px] leading-[] font-bold">{data?.firstCount}</h2>
                                <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                                    {data?.firstCountText}
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <h2 data-aos="fade-left" className="text-green text-[40px] md:text-[52px] leading-[] font-bold">{data?.secondCount}</h2>
                                <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                                    {data?.secondCountText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default OurMission