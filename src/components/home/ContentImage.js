import React from 'react'
import twoAppScreens from "../../assets/images/two-app-screens.png"
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function ContentImage() {
    return (
        <section className='w-full bg-[#f8ffff7a]'>
            <Core.Container>
                <div class="flex justify-between items-start pt-[160px] pb-20">
                    <div>
                        <h1 class="max-w-[540px] text-[48px] leading-[56px] font-bold">
                            Work together, wherever you work
                        </h1>
                        <p className='max-w-[455px] text-[18px] leading-[24px] font-regular pt-4 pb-6'>
                            The paragraph you provided is a marketing message for a credit monitoring and protection service. It highlights the key benefits of the service, which are:
                        </p>
                        <ul className='text-[20px] leading-[33px] font-medium list-disc pl-8 mb-8'>
                            <li>
                                Daily credit score updates
                            </li>
                            <li>
                                Powerful credit management tools
                            </li>
                            <li>
                                Credit lock protection
                            </li>
                            <li>
                                Identity theft insurance
                            </li>
                        </ul>
                        <button type="button" class="w-[226px] flex justify-between items-center text-[#fff] text-[20px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-8 pr-1 py-1  ">
                            Sign up free
                            <div className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#fff]'>
                                <span className='text-[#09EC92] text-[28px] pl-[5px]'>
                                    <FiChevronRight />
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className='pr-14 pb-8'>
                        <img class=" scale-[1] mt-[-60px]" src={twoAppScreens} alt="logo" />
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default ContentImage