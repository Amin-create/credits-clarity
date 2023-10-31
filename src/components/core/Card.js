import React from 'react'

function Card({ data, card1 }) {
    return (
        <>
            {card1 &&
                <div className='w-[33%] text-center rounded-[26px] bg-gradient-to-r from-gr-b-1 to-gr-b2 pt-8 pb-14 px-6'>
                    <h3 className='text-[22px] font-bold leading-[70px]'>
                        {data.title}
                    </h3>
                    <p className='text-[18px] font-regular leading-[25px]'>
                        {data.description}
                    </p>
                </div>
            }
        </>
    )
}

export default Card