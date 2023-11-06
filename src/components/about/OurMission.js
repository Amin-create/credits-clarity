import React from 'react';
import { Core } from '..';

function OurMission({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex justify-between items-start gap-x-16 pt-14 pb-20">
                    <div className='relative flex justify-center items-center w-[45%] pr-14 pb-8'>
                        <div className='absolute bottom-0 z-[-1] w-full h-[42%] rounded-bl-[110px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
                        </div>
                        <img className="" src={data?.image} alt="logo" />
                    </div>
                    <div className='flex flex-col gap-y-8 w-[55%]'>
                        <h6 className="text-gray-1 text-[18px] leading-[] font-bold mt-5"
                        >{data?.subTitle}
                        </h6>
                        <h1 className="text-[36px] leading-[40px] font-bold pr-5">
                            {data?.heading}
                        </h1>
                        <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
                            {data?.text}
                        </p>
                        <div className='flex justify-start'>
                            <div className='w-[50%]'>
                                <h2 className="text-green text-[52px] leading-[] font-bold">{data?.firstCount}</h2>
                                <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
                                    {data?.firstCountText}
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <h2 className="text-green text-[52px] leading-[] font-bold">{data?.secondCount}</h2>
                                <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
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