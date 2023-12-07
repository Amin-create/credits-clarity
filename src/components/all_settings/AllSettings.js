import React, { useState } from 'react'
import { Core } from '..';
import { EquifaxCreditReports, ExperianCreditReports, TransUnionCreditReports, TransunionReportDetails } from '../../data';

function AllSettings({ data }) {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section>
            <div className="items-center mx-auto max-full">
                <div className="justify-center w-full max-auto">
                    <div className="justify-start w-full text-left">
                        <div className='flex flex-col justify-center items-center'>
                            <ul className="flex gap-3 text-gray-500 p-[5px] mb-6">
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab1' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab1')}
                                    >
                                        My Profile
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab2' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab2')}
                                    >
                                        Change Password
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab3' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab3')}
                                    >
                                        Subscription
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab4' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab4')}
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className={`${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        a
                                    </div>
                                </div>
                                <div className={`${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        b
                                    </div>
                                </div>
                                <div className={`${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        c
                                    </div>
                                </div>
                                <div className={`${activeTab === 'tab4' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        d
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------
            page credits reports > transunion >  report details START
            -------------- */}

            <div className='hidden fle x gap-x-5'>
                <div className='   w-[50%]'>
                    <Core.Card cardNumber={9} data={TransunionReportDetails.bank} />
                </div>
                <div className='flex flex-col gap-y-3 w-[50%]'>
                    <Core.Card cardNumber={10} data={TransunionReportDetails.accountInformation1} />
                    <Core.Card cardNumber={10} data={TransunionReportDetails.accountInformation2} />
                    <Core.Card cardNumber={10} data={TransunionReportDetails.contactInformation} />
                </div>
            </div>

            {/* --------------
            page credits reports > transunion >  report details END
            -------------- */}
        </section>
    )
}

export default AllSettings