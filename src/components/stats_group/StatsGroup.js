import React, { useState } from 'react';
import { Card } from '../core';
import { Core } from '..';

function StatsGroup({ data }) {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // const toggleMobileMenu = () => {
    //     setMobileMenuOpen(!mobileMenuOpen);
    // };
    console.log("data", data)
    return (
        <div className='flex flex-col gap-y-4 mt-4'>
            {data?.map(value => {
                return (
                    <Core.Card key={value.id} cardNumber={4} data={value} />
                )
            })}
        </div>
    );
}

export default StatsGroup;
