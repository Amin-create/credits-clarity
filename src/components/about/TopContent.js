import React from 'react'
import threeAppScreens from "../../assets/images/three-app-screens.png"
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '..';

function TopContent() {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className='py-14'>
                    <h6 className="text-[32px] leading-[70px] text-gray-1 font-bold">
                        About Us
                    </h6>
                    <h1 className="text-[52px] leading-[70px] text-dark-blue font-bold text-center pt-12 pb-10">
                        Lorem Ipsum is simply dummy text the printing and typesetting industry
                    </h1>
                    <p className='text-dark-blue text-[18px] font-medium text-center'>
                        Let’s get to know each other! Here is our story.
                    </p>
                </div>
            </Core.Container>
        </section>
    )
}

export default TopContent