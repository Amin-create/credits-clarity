import React from 'react'
import playStore from "../../assets/images/play-store.png"
import appStore from "../../assets/images/appstore.png"
import { FiChevronRight } from 'react-icons/fi';

function Footer() {
    return (
        <footer class="w-full bg-gray-900 text-white py-6">
            <div class="max-w-[1340px] mx-auto">
                <div className='flex justify-between items-center'>
                    {/* <!-- Left Column --> */}
                    <div class="flex justify-start gap-x-8">
                        <p>© 2023 Credits Clarity</p>
                        <a href="#" class="text-sm hover:underline">Terms and Services</a>
                        <a href="#" class="text-sm hover:underline">Privacy Policy</a>
                    </div>

                    {/* <!-- Right Column --> */}
                    <div class="flex items-center gap-x-3">
                        <img src={playStore} alt="Google Play Store" class="" />
                        <img src={appStore} alt="App Store" class="" />
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer