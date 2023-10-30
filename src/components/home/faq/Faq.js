import React, { useState } from 'react';
import { TiStarburst } from 'react-icons/ti';

const FAQItem = ({ item, isOpen, onClick, index }) => (
    <div className={`flex justify-between items-center w-[564px] h-[70px] cursor-pointer rounded-[8px] ${isOpen && 'bg-[#0E1F3D]'} bg-gradient-to-b from-[#ffffffab] to-[#ffffff63] px-5`} onClick={() => onClick(index)}>
        <h2 className={`${isOpen && 'text-[#fff]'} text-[#0E1F3D] text-[18px] leading-[28px] font-extrabold`}>{item.question}</h2>
        {isOpen && (
            <span className='text-[#09EC92] text-[30px]'>
                <TiStarburst />
            </span>
        )}
    </div>
);

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
        <div className='pt-24 pb-28'>
            <div class="flex justify-between items-center gap-x-10 gap-y-5">
                <h2 class="w-[50%] text-[48px] leading-[56px] font-extrabold">
                    FAQs.
                </h2>
                <h2 class="w-[50%] text-[48px] leading-[56px] font-extrabold">
                    Ans.
                </h2>
            </div>
            <div className="flex justify-between gap-x-10 mt-8">
                <div className="flex flex-col justify-start items-start gap-x-4 gap-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center gap-x-10">
                            <FAQItem item={item} isOpen={openIndex === index} onClick={handleToggle} index={index} />
                        </div>
                    ))}
                </div>
                <div className="w-full h-[615px] rounded-[16px] bg-[#09EC92] p-10">
                    {openIndex !== null && (
                        <>
                            <span className='text-[#0E1F3D] text-[30px]'>
                                <TiStarburst />
                            </span>
                            <p className="text-gray-700 text-[24px] leading-[36px] font-regular mt-5">
                                {faqData[openIndex].answer}
                            </p></>
                    )}
                </div>
            </div>
        </div>

    );
};

const faqData = [
    {
        question: 'What is Credit Clarity?',
        answer: '1 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: 'What locations do we currently deliver to?',
        answer: '2 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: 'What is Chowdeck wallet?',
        answer: '3 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: 'What is Credit Clarity?',
        answer: '4 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with',
    },
    {
        question: 'What is Service fee?',
        answer: '5 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: 'Why do we charge Service fee?',
        answer: '6 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: 'What is Surge fee?',
        answer: '7 Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
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
