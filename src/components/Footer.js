import React from 'react'
import playStore from "../assets/images/play-store.png"
import appStore from "../assets/images/appstore.png"

function Footer() {
    return (
        <footer class="w-full bg-dark-blue text-white">
            <div class="max-w-[1420px] mx-auto">
                <div className='h-[165px] flex justify-between items-center'>
                    {/* <!-- Left Column --> */}
                    <div class="flex justify-start gap-x-8">
                        <p className='text-[16px] leading-[24px] font-regular'>© 2023 Credits Clarity</p>
                        <a href="#" class="text-[16px] leading-[24px] font-regular hover:underline">Terms and Services</a>
                        <a href="#" class="text-[16px] leading-[24px] font-regular hover:underline">Privacy Policy</a>
                    </div>
                    {/* <!-- Right Column --> */}
                    <div class="flex items-center gap-x-3">
                        <a href="#" class="  hover:underline">
                            <img src={playStore} alt="Google Play Store" />
                        </a>
                        <a href="#" class="  hover:underline">
                            <img src={appStore} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer