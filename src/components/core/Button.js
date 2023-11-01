import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

function Button({ children, simpleGreen, blackText, greenIconicLg }) {
    return (
        <>
            {simpleGreen &&
                <button type="button" className="text-[#fff] text-[16px] font-medium whitespace-nowrap rounded-full bg-[#09EC92] px-6 py-3  ">
                    {children}
                </button>
            }
            {blackText &&
                <button type="button" className="w-full text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                    {children}
                </button>
            }
            {greenIconicLg &&
                <button type="button" className="w-[311px] flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1  ">
                    {children}
                    <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                        <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                            <FiChevronRight />
                        </span>
                    </div>
                </button>
            }

        </>
    )
}

export default Button