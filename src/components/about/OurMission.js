import React from 'react'
import person from "../../assets/images//person.png"
import { Core } from '..';

function OurMission() {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex justify-between items-start gap-x-16 pt-14 pb-20">
                    <div className='relative flex justify-center items-center w-[45%] pr-14 pb-8'>
                        <div className='absolute bottom-0 z-[-1] w-full h-[42%] rounded-bl-[110px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
                        </div>
                        <img className="" src={person} alt="logo" />
                    </div>
                    <div className='flex flex-col gap-y-8 w-[55%]'>
                        <h6 className="text-gray-1 text-[18px] leading-[] font-bold mt-5"
                        >Our mission
                        </h6>
                        <h1 className="text-[36px] leading-[40px] font-bold pr-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </h1>
                        <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <div className='flex justify-start'>
                            <div className='w-[50%]'>
                                <h2 className="text-green text-[52px] leading-[] font-bold">250+</h2>
                                <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
                                    Lorem Ipsum is simply dummy
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <h2 className="text-green text-[52px] leading-[] font-bold">68+</h2>
                                <p className='text-dark-blue text-[18px] leading-[30px] font-regular'>
                                    Lorem Ipsum is simply dummy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default OurMission