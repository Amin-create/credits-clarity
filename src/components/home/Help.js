import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

function Help() {
    return (
        <section className='w-full relative'>

            <div class="max-w-[1170px] mx-auto">
                <div class="flex flex-col justify-center items-center gap-y-16 pb-16">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-[#0E1F3D] text-[48px] leading-[70px] font-bold mx-auto'>
                            How can we help?
                        </h2>
                        <p className='text-[#000000] text-[18px] text-center leading-[36.5px] font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='flex justify-between items-center gap-x-[20px]'>
                        <div className='w-[33%] text-center rounded-[26px] bg-gradient-to-r from-[#ffffff63] to-[#ffffff63] pt-8 pb-14 px-6'>
                            <h3 className='text-[22px] font-bold leading-[70px]'>
                                Heading 1
                            </h3>
                            <p className='text-[18px] font-regular leading-[25px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>
                        <div className='w-[33%] text-center rounded-[26px] bg-gradient-to-r from-[#ffffff63] to-[#ffffff63] pt-8 pb-14 px-6'>
                            <h3 className='text-[22px] font-bold leading-[70px]'>
                                Heading 2
                            </h3>
                            <p className='text-[18px] font-regular leading-[25px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>
                        <div className='w-[33%] text-center rounded-[26px] bg-gradient-to-r from-[#ffffff63] to-[#ffffff63] pt-8 pb-14 px-6'>
                            <h3 className='text-[22px] font-bold leading-[70px]'>
                                Heading 3
                            </h3>
                            <p className='text-[18px] font-regular leading-[25px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>
                    </div>
                    <div className=' '>
                        <button type="button" class="w-[311px] flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-8 pr-1 py-1">
                            Sign up free
                            <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                                <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                    <FiChevronRight />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help