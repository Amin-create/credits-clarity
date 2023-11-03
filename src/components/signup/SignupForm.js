import React, { useState } from 'react'
import { Core } from '..';
import { FiChevronRight } from 'react-icons/fi';
import envelope from '../../assets/images/icon/envelope.svg';
import key from '../../assets/images/icon/key.svg';
import user from '../../assets/images/icon/user.svg';
import card from '../../assets/images/icon/card.svg';
import mobile from '../../assets/images/icon/mobile.svg';
import calander from '../../assets/images/icon/calander.svg';

function SignupForm() {

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
                                Sign up
                            </h1>
                            <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-6 pb-6">

                                <div className="col-span-full">
                                    <label for="fullName" className="text-dark-blue text-[18px] leading-[30px] font-medium">Full Name</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={user} alt="big image" />
                                        <input type="text" name="fullName" id="fullName" placeholder='Full Name' autocomplete="given-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label for="email" className="text-dark-blue text-[18px] leading-[30px] font-medium">Email</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={envelope} alt="big image" />
                                        <input type="text" name="email" id="email" placeholder='name@gmail.com' autocomplete="given-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="password" className="text-dark-blue text-[18px] leading-[30px] font-medium">Password</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={key} alt="big image" />
                                        <input type="password" name="password" id="password" placeholder='**********' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="confirmPassword" className="text-dark-blue text-[18px] leading-[30px] font-medium">Confirm Password</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={key} alt="big image" />
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='**********' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="dbo" className="text-dark-blue text-[18px] leading-[30px] font-medium">DBO</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={calander} alt="big image" />
                                        <input type="date" name="dbo" id="dbo" placeholder='Date of birth' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="ssn" className="text-dark-blue text-[18px] leading-[30px] font-medium">SSN</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={card} alt="big image" />
                                        <input type="password" name="ssn" id="ssn" placeholder='AAA-GG-SSSS' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="mobileNumber" className="text-dark-blue text-[18px] leading-[30px] font-medium">Mobile Number</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={mobile} alt="big image" />
                                        <input type="text" name="mobileNumber" id="mobileNumber" placeholder='0000-0000000' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>

                                <div className="col-span-full pb-3">
                                    <div className=" space-y-3">

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input type="checkbox" className="w-[24px] h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[6px]" />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label for="comments" className="text-dark-blue text-[14px] font-bold">I Agree <a href="/terms-and-conditions">Terms & Conditions</a></label>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input type="checkbox" className="w-[24px] h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[6px]" />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label for="candidates" className="text-dark-blue text-[14px] font-bold">I Agree <a href="privacy-policy">Privacy Policy</a></label>
                                            </div>
                                        </div>

                                    </div>
                                </div>








                            </div>
                            <button type="button" className="w-full flex justify-between items-center  text-[#fff] text-[25px] font-bold whitespace-nowrap rounded-full bg-[#09EC92] pl-12 pr-1 py-1">
                                Create Account
                                <div className='flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#fff]'>
                                    <span className='text-[#09EC92] text-[35px] pl-[5px]'>
                                        <FiChevronRight />
                                    </span>
                                </div>
                            </button>
                            <p className='text-dark-blue text-[16px] leading-[20px] font-regular text-center pt-8'>
                                Do you have an account? <strong>Sign In</strong>
                            </p>
                        </form>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default SignupForm