import React from 'react'

function Container({ children, wider }) {
    return (
        <>
            {/* <div className={`mx-auto ${wider ? "max-w-[1460px]" : "max-w-[1170px]"}`}> */}
            <div className={`mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[976px] xl:max-w-[1140px] ${wider ? "max-w-[1460px]" : "max-w-[1170px]"} px-10 md:px-0`}>
                {children}
            </div>
        </>
    )
}

export default Container