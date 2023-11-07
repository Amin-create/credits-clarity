import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

function Button({ children, wider, simpleGreen, blackText, greenIconicSm, greenIconicMd, greenIconicLg, }) {
    return (
        <>
            {/* {simpleGreen &&
                <button type="button" className="text-[#fff] text-[16px] font-medium whitespace-nowrap rounded-full bg-[#09EC92] px-6 py-3  ">
                    {children}
                </button>
            } */}
            {/* {greenIconicLg &&
                <button type="button" className={`
                w-[311px] text-[25px]
                 flex justify-between items-center  text-[#fff]  font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1
                 `}>
                    {children}
                    <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                        <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                            <FiChevronRight />
                        </span>
                    </div>
                </button>
            } */}
            {/* {greenIconicMd &&
                <button type="button" className={`
                w-[250px] text-[25px] 
                flex justify-between items-center  text-[#fff] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1`}>
                    {children}
                    <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                        <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                            <FiChevronRight />
                        </span>
                    </div>
                </button>
            } */}
            {blackText &&
                <button type="button" className="w-full text-[12px] md:text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                    {children}
                </button>
            }
            {(greenIconicLg || greenIconicSm || greenIconicMd || simpleGreen) &&
                <button data-aos="fade-right" type="button" className={`
                ${greenIconicLg && 'w-[180px] md:w-[311px] text-[18px] leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-1'}
                ${greenIconicMd && 'w-[170px] md:w-[250px] text-[18px] leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-1'}
                ${greenIconicSm && 'w-[160px] md:w-[226px] text-[16px] leading-[18px] md:text-[20px] md:leading-[26px] font-bold pl-5 md:pl-8 pr-1 py-1'}
                ${wider && 'w-full md:w-full'}
                ${simpleGreen && 'text-[12px] md:text-[16px] font-medium px-3 md:px-6 py-1.5 md:py-3'}
                
                 flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full bg-green hover:bg-green-2 active:bg-green-3 transition-all group
                `}>
                    {children}
                    {!simpleGreen &&
                        <div className={`
                     ${greenIconicLg && 'w-[40px] md:w-[60px] h-[40px] md:h-[60px] group-hover:scale-90 transition-all'}
                     ${greenIconicMd && 'w-[40px] md:w-[60px] h-[40px] md:h-[60px]'}
                     ${greenIconicSm && 'w-[30px] md:w-[48px] h-[30px] md:h-[48px]'}
                    flex justify-center items-center  rounded-full bg-[#fff]
                    `}>
                            <span className='text-[#09EC92] text-[28px] pl-[3px] md:pl-[5px]'>
                                <FiChevronRight />
                            </span>
                        </div>
                    }
                </button>
            }
        </>
    )
}

export default Button