import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function Cta() {
    return (
        <section className='cta-section w-full bg-[#f8ffff7a]'>           
                <Core.Container>
                <div className="flex flex-col justify-start items-start gap-y-10 pt-[110px] pb-[70px] px-5">
                    <h1 className="max-w-[450px] text-[#fff] text-[48px] leading-[56px] font-bold">
                        Discover Credit Clarity  - Your New Favorite
                    </h1>
                    <button type="button" className="w-[311px] flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1">
                        Sign up free
                        <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                            <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                <FiChevronRight />
                            </span>
                        </div>
                    </button>
                </div>      
           </Core.Container>
        </section>
    )
}

export default Cta