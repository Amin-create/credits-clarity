import React from 'react'
import { Core } from '..';

function BigImage({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-left gap-y-16 pt-12 pb-28">
                    {data?.map((value) =>
                        <>
                            {value.type === "bold-text" &&
                                <h3 className="max-w-[866px] text-blue text-[36px] leading-[40px] font-bold">
                                    We are the next generation productivity software helping sales and revenue teams navigate their daily work with ebb and flow.
                                </h3>
                            }
                            {value.type === "descriptions" &&
                                <div className='flex justify-between gap-x-16'>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col justify-start gap-y-6 pr-8'>
                                            {value.leftBlock.map((value) =>
                                                <p className="text-blue text-[18px] leading-[30px] font-regular">
                                                    {value}
                                                </p>)}
                                        </div>
                                    </div>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col justify-start gap-y-6 pl-8'>
                                            {value.rightBlock.map((value) =>
                                                <p className="text-blue text-[18px] leading-[30px] font-regular">
                                                    {value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }



                        </>
                    )}
                </div>
            </Core.Container>
        </section>
    )
}

export default BigImage