import React from 'react'
import { Core } from '..';
import { FiChevronRight } from 'react-icons/fi';

function ContactForm() {
    return (
        <section className='w-full relative'>
            <Core.Container>

                <form className='pt-5 md:pt-10 pb-24 md:pb-52'>
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label for="first-name" className="text-dark-blue text-[18px] leading-[30px] font-medium">First name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" placeholder='First name' autocomplete="given-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label for="last-name" className="text-dark-blue text-[18px] leading-[30px] font-medium">Last name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" placeholder='Last name' autocomplete="family-name" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label for="email" className="text-dark-blue text-[18px] leading-[30px] font-medium">Email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" placeholder='Email' autocomplete="email" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label for="phone" className="text-dark-blue text-[18px] leading-[30px] font-medium">Phone Number</label>
                                <div className="mt-2">
                                    <input id="phone" name="phone" type="text" placeholder='Phone Number' autocomplete="phone" className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]" />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label for="about" className="text-dark-blue text-[18px] leading-[30px] font-medium">Message</label>
                                <div className="mt-2">
                                    <textarea id="about" name="about" rows="4" placeholder='Message' className="w-full text-dark-blue text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <Core.Button greenIconicMd>Submit</Core.Button>
                    </div>
                </form>
            </Core.Container>
        </section>
    )
}

export default ContactForm