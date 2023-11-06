import React from 'react'
import playStore from "../assets/images/play-store.png";
import appStore from "../assets/images/appstore.png";

function Footer() {
    return (
        <footer className="w-full  bg-dark-blue text-white">
            <div className="max-w-[90%]  lg:max-w-[1000px] xl:max-w-[1220px]  2xl:max-w-[1420px]   mx-auto">
                <div className='lg:h-[165px] flex flex-col lg:flex-row justify-between items-start md:items-center gap-y-10 lg:gap-y-0 py-10 lg:py-0'>
                    {/* <!-- Left Column --> */}
                    <div className="flex flex-col md:flex-row justify-start gap-x-8 gap-y-4 md:gap-y-0">
                        <p className='text-[16px] leading-[24px] font-thin'>© 2023 Credits Clarity</p>
                        <a href="/terms-and-conditions" className="text-[16px] leading-[24px] font-thin hover:underline">Terms and Services</a>
                        <a href="/privacy-policy" className="text-[16px] leading-[24px] font-thin hover:underline">Privacy Policy</a>
                    </div>
                    {/* <!-- Right Column --> */}
                    <div className="flex items-center gap-x-3">
                        <a href="#" className="  hover:underline">
                            <img src={playStore} alt="Google Play Store" />
                        </a>
                        <a href="#" className="  hover:underline">
                            <img src={appStore} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer