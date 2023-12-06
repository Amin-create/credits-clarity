import React, { useState } from 'react';
import { Core } from '../../../../components';
import AllNotifications from '../../../../components/all_notifications/AllNotifications';

function Notification() {

    const breadcrumb = [
        { label: "Notification", link: "/dashboard/notification" },
    ];
    const allNotifications = [
        {
            
            id: 'hs-basic-heading-one',
            title: "What is the Infinite Sock Dispenser?",
            description: "The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. " ,
        },
        {
            
            id: 'hs-basic-heading-two',
            title: "What is the Infinite Sock Dispenser?",
            description: "The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. " ,
        },
        {
            
            id: 'hs-basic-heading-three',
            title: "What is the Infinite Sock Dispenser?",
            description: "The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again.  The Infinite Sock Dispenser is a revolutionary device that dispenses socks from another dimension, ensuring you never run out of clean socks again. " ,
        }
    ]
    return (
        <>
            <Core.Breadcrumb
                heading="Notification"
                breadcrumb={breadcrumb}
            />
            <AllNotifications data={allNotifications} />
        </>
    );
}

export default Notification;
