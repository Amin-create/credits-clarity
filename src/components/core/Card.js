import React from 'react'

function Card({ data, card1, card2 }) {
    return (
        <>
            {card1 &&
                <div className='w-full ld:w-[33%] text-center rounded-[26px] bg-gradient-to-r from-gr-b-1 to-gr-b2 pt-8 pb-14 px-6'>
                    <h3 className='text-[22px] leading-[70px] font-bold'>
                        {data?.title}
                    </h3>
                    <p className='text-[18px] leading-[25px] font-regular'>
                        {data?.description}
                    </p>
                </div>
            }
            {card2 &&
                <div className='w-full ld:w-[33%] rounded-tr-[60px] rounded-bl-[60px] bg-white-1 py-16 px-10'>
                    <p className='text-[16px] leading-[28px] font-regular'>
                        {data?.description}
                    </p>
                </div>
            }
        </>
    )
}

export default Card