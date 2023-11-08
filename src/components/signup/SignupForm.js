import React, { useState } from 'react'
import { Core } from '..';
import styles from '../../style';
import { Link, NavLink } from 'react-router-dom';

function SignupForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [calender, setcalender] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [ssn, setSsn] = useState("");
    console.log("email", email)
    console.log("password", password)
    console.log("confirmPassword", confirmPassword)
    console.log("fullName", fullName)
    console.log("calender", calender)
    console.log("mobileNumber", mobileNumber)
    console.log("ssn", ssn)

    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center pt-14 md:pt-28 pb-20 md:pb-72">
                    <div className='w-full max-w-[700px] rounded-[30px] bg-white px-6 md:px-24 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-12'>
                        <form>
                            <h1 className='text-dark-blue text-[28px] sm:text-[40px] md:text-[52px] leading-[35px] sm:leading-[50px] md:leading-[70px] tracking-[-1px] font-bold text-center mx-auto mb-[10px] sm:mb-[20px] md:mb-[60px]'>
                                Sign up
                            </h1>
                            <div className="grid grid-cols-1 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-5 sm:grid-cols-6 pb-6">
                                <Core.InputWithLabel
                                    setState={setFullName}
                                    name="fullName"
                                />
                                <Core.InputWithLabel
                                    setState={setEmail}
                                    name="email"
                                />
                                <Core.InputWithLabel
                                    setState={setPassword}
                                    name="password"
                                />
                                <Core.InputWithLabel
                                    setState={setConfirmPassword}
                                    name="confirmPassword"
                                />
                                <Core.InputWithLabel
                                    setState={setcalender}
                                    name="calender"
                                />
                                <Core.InputWithLabel
                                    setState={setSsn}
                                    name="ssn"
                                />
                                <Core.InputWithLabel
                                    setState={setMobileNumber}
                                    name="mobileNumber"
                                />
                                {/* <div className="col-span-full">
                                    <label for="email" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Email</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={envelope} alt="big image" />
                                        <input type="text" name="email" id="email" placeholder='name@gmail.com' autocomplete="given-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label for="password" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Password</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={key} alt="big image" />
                                        <input type="password" name="password" id="password" placeholder='**********' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-full">
                                    <label for="confirmPassword" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Confirm Password</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={key} alt="big image" />
                                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='**********' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-full">
                                    <label for="dbo" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">DBO</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={calender} alt="big image" />
                                        <input type="date" name="dbo" id="dbo" placeholder='Date of birth' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-full">
                                    <label for="ssn" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">SSN</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={card} alt="big image" />
                                        <input type="password" name="ssn" id="ssn" placeholder='AAA-GG-SSSS' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div> */}
                                {/* <div className="col-span-full">
                                    <label for="mobileNumber" className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">Mobile Number</label>
                                    <div className="relative mt-2">
                                        <img className="absolute left-5 top-[18px]" src={mobile} alt="big image" />
                                        <input type="text" name="mobileNumber" id="mobileNumber" placeholder='0000-0000000' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[60px] pr-[15px] py-[15px]" />
                                    </div>
                                </div> */}
                                <div className="col-span-full pb-3">
                                    <div className=" space-y-3">

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input type="checkbox" className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[4px] md:rounded-[6px]" />
                                            </div>
                                            <div className="">
                                                <label for="comments" className="text-dark-blue text-[12px] md:text-[14px] font-bold">I Agree <a className={`${styles.linkHover1}`} > <Link to="/terms-and-conditions">
                                                    Terms and Services
                                                </Link></a></label>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input type="checkbox" className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[4px] md:rounded-[6px]" />
                                            </div>
                                            <div className="">
                                                <label for="candidates" className="text-dark-blue text-[12px] md:text-[14px] font-bold">I Agree <a className={`${styles.linkHover1}`} > <Link to="/privacy-policy">
                                                    Privacy Policy
                                                </Link></a></label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <Core.Button greenIconicLg wider>Create Account</Core.Button>
                            <p className='text-dark-blue text-[12px] md:text-[16px] leading-[14px] md:leading-[20px] font-regular text-center pt-4 md:pt-8'>
                                Do you have an account? <strong className='inline-block'>
                                    <a className={` ${styles.linkHover1}`}>
                                        <NavLink to="/login">Sign in</NavLink>
                                    </a>
                                </strong>
                            </p>
                        </form>
                    </div>
                </div >
            </Core.Container >
        </section >
    )
}

export default SignupForm