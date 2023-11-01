import React from 'react'

function Container({ children, wider }) {
    return (
        <div className={`mx-auto ${wider ? "max-w-[1460px]" : "max-w-[1170px]"}`}>
            {children}
        </div>
    )
}

export default Container