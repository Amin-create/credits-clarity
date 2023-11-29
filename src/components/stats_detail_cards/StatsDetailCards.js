import React, { useState } from 'react';
import { Card } from '../core';

function StatsDetailCards({ data }) {
    console.log("data", data)
    return (
        <div className='flex gap-x-4'> 
            <Card card5 data={data.creditScore} />
            <Card card6 data={data.creditFactors} />
        </div>
    );
}

export default StatsDetailCards;
