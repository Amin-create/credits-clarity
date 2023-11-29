import React from 'react';
import styles from '../../style';
import { Core } from '..';

function Card({ data, card1, card2, card3, card4, card5, card6 }) {
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
            {card3 &&
                <div data-aos="fade-up" className={`w-full ld:w-[33%] rounded-[6px] md:rounded-[6px] bg-white-1 pt-10 md:pt-[30px] pb-10 md:pb-[50px] px-6 md:px-[65px] ${styles.cardHover}`}>
                    <h3 className='text-[32px] leading-[70px] font-bold'>
                        {data?.title}
                    </h3>
                    <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-regular'>
                        {data?.description}
                    </p>
                </div>
            }
            {card4 &&
                <div data-aos="fade-up" className={`flex justify-between items-center w-full ld:w-[33%] rounded-[6px] md:rounded-[6px] bg-white-1 pt-10 md:pt-[30px] pb-10 md:pb-[50px] px-6 md:px-[65px] $ {styles.cardHover}`}>
                    <div className='flex flex-col items-start gap-y-1 w-[35%]'>
                        <h3 className='text-[32px] leading-[70px] font-bold'>
                            {data?.title}
                        </h3>
                        <Core.Button greenIconicXs to={`${data?.title.toLowerCase()}/details`} >View Detail</Core.Button>
                    </div>
                    <div className='flex flex-col items-center gap-y-2 w-[32%]'>
                        {data?.creditHealth}
                        <h6 className='text-[14px] leading-[16px]'>Credit Health</h6>
                    </div>
                    <div className='flex flex-col items-center gap-y-2 w-[32%] border-l-[2px] border-gray-3'>
                        {data?.creditScore}
                        <h6 className='text-[14px] leading-[16px]'>Credit Score</h6>
                    </div>
                </div>
            }
            {card5 &&
                <div data-aos="fade-up" className={`w-full rounded-[18px] md:rounded-[24px] bg-white-1 pt-10 md:pt-[30px] pb-10 md:pb-[50px] px-6 md:px-[65px] $ {styles.cardHover}`}>
                    <div className='flex justify-between gap-x-2'>
                        <h3 className='text-[32px] leading-[70px] font-bold'>
                            {data?.title}Credit Score
                        </h3>
                        <Core.Button greenIconicXs >Refresh Score</Core.Button>
                    </div>

                    <div>
                        <span>875</span>
                        <span>out of 900</span>
                    </div>

                    <div>
                        <span>8 Points </span>
                        <span>Check daily</span>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            }
            {card6 &&
                <div data-aos="fade-up" className={`w-full rounded-[18px] md:rounded-[24px] bg-white-1 pt-10 md:pt-[30px] pb-10 md:pb-[50px] px-6 md:px-[65px] $ {styles.cardHover}`}>
                    <h3 className='text-[32px] leading-[70px] font-bold'>
                        {data?.title}Credit Factors
                    </h3>
                    <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[25px] font-regular'>
                        {data?.description}
                    </p>
                    <div className='flex justify-between items-start border-b-[1px] border-gray-6'>
                        <div>
                            <span>Payment History</span>
                            <span>Excellent  |  High Impact</span>
                        </div>
                        <span>100%</span>
                    </div>
                    
                    
                    <div className='flex justify-between items-start border-b-[1px] border-gray-6'>
                        <div>
                            <span>Payment History</span>
                            <span>Excellent  |  High Impact</span>
                        </div>
                        <span>100%</span>
                    </div>
                    

                    <div className='flex justify-between items-start border-b-[1px] border-gray-6'>
                        <div>
                            <span>Payment History</span>
                            <span>Excellent  |  High Impact</span>
                        </div>
                        <span>100%</span>
                    </div>
                    


                    <Core.Button greenIconicXl >View Full Credit Report</Core.Button>
                

                </div>
            }
        </>
    )
}

export default Card