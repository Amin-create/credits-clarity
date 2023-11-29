import React, { useState } from 'react';
import { Card } from '../core';

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
                    <Card key={value.id} card4 data={value} />
                )
            })}
        </div>
    );
}

export default StatsGroup;
