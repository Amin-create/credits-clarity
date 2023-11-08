import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Button({ children, wider, simpleGreen, blackText, greenIconicSm, greenIconicMd, greenIconicLg, to }) {
    console.log("to", to)
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
                <NavLink to={to ? to : "/"}>
                    <button type="button" className="w-full text-[12px] md:text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                        {children}
                    </button>
                </NavLink>
            }
            {(greenIconicLg || greenIconicSm || greenIconicMd || simpleGreen) &&
                <NavLink to={to ? to : "/"}>
                    <button type="button" className={`
                        ${greenIconicLg && 'w-[160px] sm:w-[180px] md:w-[311px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-1'}
                        ${greenIconicMd && 'w-[150px] sm:w-[170px] md:w-[250px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-1'}
                        ${greenIconicSm && 'w-[160px] md:w-[226px] text-[12px] sm:text-[16px] leading-[14px] sm:leading-[18px] md:text-[20px] md:leading-[26px] font-bold pl-5 md:pl-8 pr-1 py-1'}
                        ${wider && 'w-full md:w-full'}
                        ${simpleGreen && 'text-[12px] md:text-[16px] font-medium px-3 md:px-6 py-1.5 md:py-3'}
                        
                        flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full bg-green hover:bg-green-2 active:bg-green-3 transition-all group
                        `}>
                            {children}
                            {!simpleGreen &&
                                <div className={`
                                ${greenIconicLg && 'w-[30px] sm:w-[40px] md:w-[60px] h-[30px] sm:h-[40px] md:h-[60px] group-hover:scale-90 transition-all'}
                                ${greenIconicMd && 'w-[30px] sm:w-[40px] md:w-[60px] h-[30px] sm:h-[40px] md:h-[60px]'}
                                ${greenIconicSm && 'w-[20px] sm:w-[30px] md:w-[48px] h-[20px] sm:h-[30px] md:h-[48px]'}
                                flex justify-center items-center  rounded-full bg-[#fff]
                            `}>
                            <span className='text-[#09EC92] text-[18px] sm:text-[28px] pl-[3px] md:pl-[5px]'>
                                <FiChevronRight />
                            </span>
                        </div>} 
                    </button>
                </NavLink>
            }
        </>
    )
}

export default Button