import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

function Cta() {
    return (
        <section className='cta-section w-full bg-[#f8ffff7a]'>
            <div class="max-w-[1170px] mx-auto">
                <div class="flex flex-col justify-start items-start gap-y-12 py-[90px]">
                    <h1 class="max-w-[450px] text-[#fff] text-[48px] leading-[56px] font-bold">
                        Discover Credit Clarity  - Your New Favorite
                    </h1>
                    <button type="button" class="w-[311px] flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-8 pr-1 py-1">
                        Sign up free
                        <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                            <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                <FiChevronRight />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cta