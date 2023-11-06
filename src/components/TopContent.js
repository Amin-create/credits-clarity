import React from 'react';
import { Core } from '.';

function TopContent({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className={`pt-8 md:pt-16 ${data?.simpleParagraphs ? "pb-[80px] md:pb-[340px]" : "pb-8"}`}>
                    <h6 className={`text-gray-1 text-[22px] md:text-[32px] leading-[58px] md:leading-[70px] tracking-[-1px] font-bold ${data?.simpleParagraphs ? "pb-0 md:pb-6" : ""}`}>
                        {data?.firstHeading}
                    </h6>
                    {data?.secondHeading &&
                        <h1 className={`text-dark-blue text-[34px] md:text-[52px] leading-[40px] md:leading-[68px] font-bold text-center pt-3 md:pt-14 ${data?.firstText && "pb-8 md:pb-14"}`}>
                            {data?.secondHeading}
                        </h1>
                    }
                    {data?.firstText &&
                        <p className='text-dark-blue text-[14px] md:text-[18px] font-semibold text-center'>
                            {data?.firstText}
                        </p>
                    }
                    {data?.secondText &&
                        <p className={`${!data?.firstText && "max-w-[1025px] mx-auto"} text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular text-center ${data?.firstText ? "pt-6" : "pt-3"}`}>
                            {data?.secondText}
                        </p>
                    }
                    {data?.simpleParagraphs &&
                        data?.simpleParagraphs.map((value) => {
                            return (
                                <>
                                    {value.type === "heading" &&
                                        <h6 className={`text-dark-blue text-[18px] md:text-[22px] leading-[26px] md:leading-[36px] font-bold`}>
                                            {value?.text}
                                        </h6>
                                        }
                                    {value.type === "boldText" &&
                                        <p className={`text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-semibold`}>
                                            {value?.text}
                                        </p>
                                        }
                                    {value.type === "paragraph" && <p className={`text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular pb-4 md:pb-8`}>
                                        {value?.text}
                                    </p>
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </Core.Container>
        </section >
    )
}

export default TopContent