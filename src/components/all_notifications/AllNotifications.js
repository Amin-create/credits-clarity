import React from 'react'
import { Core } from '..';
import Accordion from '../accordion/Accordion';

function AllNotifications({ data }) {

    return (
        <section>
            <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[40px] pb-10 md:pb-[50px] $ {styles.cardHover}`}>
                <h4 className='text-[20px] leading-[23px] font-extrabold px-[70px]'>
                    Today
                </h4>
                {data?.map((value, index) => {
                    const isLastItem = index === data.length - 1;
                    return (
                        <div className={`px-[70px] py-7 ${isLastItem ? '' : 'border-b-[1px]'}`}>
                            <h6 className='text-[16px] leading-[24px] font-bold mb-4'>{value.title}</h6>
                            <p className='text-[16px] leading-[24px] font-regular'>{value.description}</p>
                        </div>
                    )
                })}




                <Accordion data={data} />








            </div>
        </section>
    )
}

export default AllNotifications