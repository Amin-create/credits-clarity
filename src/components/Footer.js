import React from 'react'
import playStore from "../assets/images/play-store.png"
import appStore from "../assets/images/appstore.png"

function Footer() {
    return (
        <footer className="w-full bg-dark-blue text-white">
            <div className="max-w-[1420px] mx-auto">
                <div className='h-[165px] flex justify-between items-center'>
                    {/* <!-- Left Column --> */}
                    <div className="flex justify-start gap-x-8">
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