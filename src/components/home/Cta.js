import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function Cta({ data }) {
    return (
        <section className='cta-section w-full bg-[#f8ffff7a]'>
            <Core.Container>
                <div className="flex flex-col justify-start items-start gap-y-6 md:gap-y-10 pt-[50px] md:pt-[110px] pb-[50px] md:pb-[70px] px-0 md:px-5">
                    <h1 className="max-w-[450px] text-[#fff] text-[36px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold">
                        {data?.heading}
                    </h1>
                    <Core.Button greenIconicLg>Sign up free</Core.Button>
                </div>
            </Core.Container>
        </section>
    )
}

export default Cta