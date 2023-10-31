import React from 'react'

function Container({ children }) {
    return (
        <div class="mx-auto max-w-[1170px]">
            {children}
        </div>
    )
}

export default Container