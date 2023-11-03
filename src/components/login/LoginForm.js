import React, { useState } from 'react'
import { Core } from '..';
import { FiChevronRight } from 'react-icons/fi';
import envelope from '../../assets/images/icon/envelope.svg';
import key from '../../assets/images/icon/key.svg';

function LoginForm() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center pt-28 pb-72">
                    <div className='w-full max-w-[700px] rounded-[30px] bg-white px-24 pt-14 pb-12'>
                        <form>
                            <h1 className='text-dark-blue text-[52px] leading-[70px] tracking-[-1px] font-bold text-center mx-auto mb-[60px]'>
                                Sign in
                            </h1>
                            <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-6 pb-6">
                                <div className="col-span-full">
                                    <label for="email" className="text-dark-blue text-[18px] leading-[30px] font-medium">Email</label>
                                    <div className="relative mt-2">
                                    <img className="absolute left-5 top-[18px]" src={envelope} alt="big image" />
                                        <input type="text" name="email" id="email" placeholder='name@gmail.com' autocomplete="off" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="password" className="text-dark-blue text-[18px] leading-[30px] font-medium">Password</label>
                                    <div className="relative mt-2">
                                    <img className="absolute left-5 top-[18px]" src={key} alt="big image" />
                                       <input type="password" name="password" id="password" placeholder='**********' autocomplete="off" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6 pb-10">
                                <div className="sm:col-span-3">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="relative w-[62px] h-[32px] bg-gray-4 rounded-full transition duration-300 ease-in-out">
                                            <span
                                                className={`absolute w-[28px] h-[28px] rounded-full transform m-[2px] ${isChecked ? "bg-green translate-x-full" : "bg-gray-5 translate-x-0"
                                                    } transition duration-300 ease-in-out`}
                                            ></span>
                                        </span>
                                        <span className="text-dark-blue text-[14px] leading-[23px] font-semibold">Remember Me</span>
                                    </label>
                                </div>
                                <div className="sm:col-span-3 flex justify-end">
                                    <span className="text-dark-blue text-[14px] leading-[23px] font-semibold">Forgot Password?</span>
                                </div>
                            </div>
                            <button type="button" className="w-full flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1">
                                Sign in
                                <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                                    <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                        <FiChevronRight />
                                    </span>
                                </div>
                            </button>
                            <p className='text-dark-blue text-[16px] leading-[20px] font-regular text-center pt-8'>
                                Don’t have any account? <strong>Create Account</strong>
                            </p>
                        </form>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default LoginForm