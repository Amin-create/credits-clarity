import React from 'react'
import { Card } from '../../../../components/core'
import { dashboardCard } from '../../../../data'
import StatsGroup from '../../../../components/stats_group/StatsGroup'

const stats = [
    {
        id: "1",
        title: "TransUnion",
        creditHealth: 5,
        creditScore: "765",
    },
    {
        id: "2",
        title: "Equifax",
        creditHealth: 3,
        creditScore: "525",
    },
    {
        id: "3",
        title: "Experian",
        creditHealth: 1,
        creditScore: "305",
    }
]
function Dashboard() {
    return (
        <>
            <Card card3 data={dashboardCard} />
            <StatsGroup data={stats} />
        </>
    )
}

export default Dashboard