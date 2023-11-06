import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function Cta({ data }) {
    return (
        <section className='cta-section w-full bg-[#f8ffff7a]'>
            <Core.Container>
                <div className="flex flex-col justify-start items-start gap-y-10 pt-[110px] pb-[70px] px-5">
                    <h1 className="max-w-[450px] text-[#fff] text-[48px] leading-[56px] font-bold">
                        {data?.heading}
                    </h1>
                    <Core.Button greenIconicLg>Sign up free</Core.Button>
                </div>
            </Core.Container>
        </section>
    )
}

export default Cta