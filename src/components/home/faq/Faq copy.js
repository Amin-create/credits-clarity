import React, { useState } from 'react';
import { TiStarburst } from 'react-icons/ti';

const FAQ = ({ faqData }) => {
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
        <div className='py-24'>
            <div class="flex justify-between items-center gap-x-4 gap-y-5">
                <h2 class="max-w-[540px] text-[48px] leading-[56px] font-bold">
                    FAQs.
                </h2>
                <h2 class="max-w-[540px] text-[48px] leading-[56px] font-bold">
                    Ans.
                </h2>
            </div>
            <div class="flex flex-col justify-start items-start gap-x-4 gap-y-5">
                {faqData.map((item, index) => (
                    <div key={index} class="flex justify-between items-center gap-x-10">
                        {/* 1st */}
                        {/*  */}
                        <div
                            className={`
                            border-[red] border-[5px]
                        flex justify-between items-center w-[564px] h-[70px] cursor-pointer rounded-[8px] ${openIndex === index && 'bg-[#0E1F3D]'} bg-[#fff]  px-5
                        `}
                            onClick={() => handleToggle(index)}
                        >
                            <h2 className={`${openIndex === index && 'text-[#fff]'} text-[#0E1F3D] text-[18px] leading-[28px] font-extrabold`}>
                                {item.question}
                            </h2>
                            {openIndex === index &&
                                <span className='text-[#09EC92] text-[30px]'>
                                    <TiStarburst />
                                </span>
                            }
                        </div>
                        {/* 2nd */}
                        {openIndex === index && (
                            <div className='
                   max-w-[564px] 
                      bg-[#09EC92]
                      p-10
                        '>
                                <span className='text-[#09EC92] text-[30px]'>
                                    <TiStarburst />
                                </span>

                                <p className="text-gray-700 text-[24] leading-[36px] font-regular mt-2">{item.answer}</p>
                            </div>
                        )}
                    </div >

                ))}
            </div>
        </div>

    );
};

const faqData = [
    {
        question: '1 What is Lorem Ipsum?',
        answer: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        question: '2 Why do we use it?',
        answer: '2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        question: '3 What is Lorem Ipsum?',
        answer: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        question: '4 Why do we use it?',
        answer: '4 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    // Add more FAQ items as needed
];

function Faq() {
    return (
        <section className='w-full bg-[#E9F9F2]'>
            <div class="max-w-[1170px] mx-auto">
                {/* <div>
                        */}
                <FAQ faqData={faqData} />
                {/* </div >
                <div>
                      
                    </div> */}


            </div >
        </section >
    );
}

export default Faq;
