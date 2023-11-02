import React from 'react';
import { Core } from '.';

function TopContent({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className='pt-16 pb-8'>
                    <h6 className="text-gray-1 text-[32px] leading-[70px] tracking-[-1px] font-bold">
                        {data?.firstHeading}
                    </h6>
                    <h1 className={`text-dark-blue text-[52px] leading-[68px] font-bold text-center pt-14 ${data?.firstText && "pb-14"}`}>
                        {data?.secondHeading}
                    </h1>
                    <p className='text-dark-blue text-[18px] font-semibold text-center'>
                        {data?.firstText}
                    </p>
                    <p className={`${!data?.firstText && "max-w-[1025px] mx-auto"} text-dark-blue text-[18px] leading-[30px] font-regular text-center ${data?.firstText ? "pt-6" : "pt-3"}`}>
                        {data?.secondText}
                    </p>
                </div>
            </Core.Container>
        </section>
    )
}

export default TopContent