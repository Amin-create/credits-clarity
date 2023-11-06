import React, { useState } from 'react';
import { TiStarburst } from 'react-icons/ti';
import { Core } from '../../../components';

const FAQItem = ({ item, isOpen, onClick, index }) => (
    <div className={`flex justify-between items-center w-[564px] h-[70px] cursor-pointer rounded-[8px] ${isOpen && 'bg-dark-blue'} ${!isOpen && 'bg-gradient-to-b from-[#ffffffab] to-[#ffffff63]'} px-5`} onClick={() => onClick(index)}>
        <h2 className={`${isOpen && 'text-[#fff]'} ${!isOpen && 'text-dark-blue'}  text-[18px] leading-[28px] font-extrabold`}>{item.question}</h2>
        {isOpen && (
            <span className='text-[#09EC92] text-[30px]'>
                <TiStarburst />
            </span>
        )}
    </div>
);

const FAQ = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (openIndex === index) {
            // Clicked on an already open FAQ, so close it.
            setOpenIndex(null);
        } else {
            // Clicked on a closed FAQ, so open it.
            setOpenIndex(index);
        }
    };

    return (
        <div className='pt-24 pb-28'>
            <div className="flex justify-between items-center gap-x-10 gap-y-5">
                <h2 className="w-[50%] text-[48px] leading-[56px] font-extrabold">
                    FAQs.
                </h2>
                <h2 className="hidden lg:block w-[50%] text-[48px] leading-[56px] font-extrabold">
                    Ans.
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8">
                <div className="flex flex-col justify-start items-start gap-x-4 gap-y-4">
                    {data?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center gap-x-10">
                            <FAQItem item={item} isOpen={openIndex === index} onClick={handleToggle} index={index} />
                        </div>
                    ))}
                </div>
                <div className="w-full h-[615px] rounded-[16px] bg-[#09EC92] p-10">
                    {openIndex !== null && (
                        <>
                            <span className='text-dark-blue text-[30px]'>
                                <TiStarburst />
                            </span>
                            <p className="text-gray-700 text-[24px] leading-[36px] font-regular mt-5">
                                {data[openIndex].answer}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


function Faq({ data }) {
    return (
        <section className='w-full bg-[#E9F9F2]'>
            <Core.Container>
                <FAQ data={data} />
            </Core.Container>
        </section>
    );
}

export default Faq;
