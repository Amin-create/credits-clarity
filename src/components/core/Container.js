import React from 'react'

function Container({ children }) {
    return (
        <div className="mx-auto max-w-[1170px]">
            {children}
        </div>
    )
}

export default Container