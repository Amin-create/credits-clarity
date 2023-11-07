import React from 'react';
import styles from '../../style';

function Card({ data, card1, card2 }) {
    return (
        <>
            {card1 &&
                <div data-aos="fade-up" className={`w-full ld:w-[33%] text-center rounded-[26px] bg-gradient-to-r from-white-2 to-white-2 gr-b-1 b2 pt-4 md:pt-8 pb-7 md:pb-14 px-3 md:px-6 ${styles.cardHover}`}>
                    <h3 className='text-[22px] leading-[70px] font-bold'>
                        {data?.title}
                    </h3>
                    <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[25px] font-regular'>
                        {data?.description}
                    </p>
                </div>
            }
            {card2 &&
                <div data-aos="fade-up" className={`w-full ld:w-[33%] rounded-tr-[35px] md:rounded-tr-[60px] rounded-bl-[35px] md:rounded-bl-[60px] bg-white-1 py-10 md:py-16 px-6 md:px-10 ${styles.cardHover}`}>
                    <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-regular'>
                        {data?.description}
                    </p>
                </div>
            }
        </>
    )
}

export default Card