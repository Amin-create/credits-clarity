import React from 'react'
import { Core } from '.';


function HorizontalContents({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-center gap-y-2 pt-8 pb-6">
                    {data?.heading && <h1 className="text-[36px] leading-[40px] font-bold text-center pb-4">
                        {data?.heading}
                    </h1>}
                    {data?.texts.map((value) =>
                        <p key={value * 2} className='text-dark-blue text-[18px] leading-[30px] font-regular text-center pt-6'>
                            {value}
                        </p>
                    )}
                </div>
            </Core.Container>
        </section>
    )
}

export default HorizontalContents