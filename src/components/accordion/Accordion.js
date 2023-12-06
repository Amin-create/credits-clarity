import React, { useState } from 'react'
 
function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
 
    return (
        <div className="hs-accordion-group">
            {data.map((value, index) => (
                <div className={`hs-accordion ${activeIndex === index ? 'active' : ''}`} key={value.id}>
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        aria-controls={`hs-basic-collapse-${index + 1}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {/* Add SVG icons here */}
                        {value.title}
                    </button>
                    <div
                        id={`hs-basic-collapse-${index + 1}`}
                        className={`hs-accordion-content transition-all duration-300  ${activeIndex === index ? 'w-full' : 'max-h-0'}`}
                        aria-labelledby={`hs-basic-heading-${index + 1}`}
                    >
                        <div className="pb-4 px-6">
                            <p className="text-sm text-gray-600 dark:text-gray-200">{value.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion