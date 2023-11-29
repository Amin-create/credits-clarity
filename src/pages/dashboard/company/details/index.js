import React from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../../../components/core'
import { dashboardCard } from '../../../../data'
import StatsDetailCards from '../../../../components/stats_detail_cards/StatsDetailCards'
import { Core } from '../../../../components';

function CompanyDetails() {
    let { companyName } = useParams();
    let _companyName = "";
    switch (companyName) {
        case "transunion":
            _companyName = "TransUnion";
            break;
        case "equifax":
            _companyName = "Equifax";
            break;
        case "experian":
            _companyName = "Experian";
            break;
        default:
            break;
    }

    const breadcrumb = [
        { label: "Home", link: "/dashboard" },
        { label: _companyName },
        { label: "Details" },
    ];
    const statsDetails ={
        creditScore:[],
        creditFactors:[],
    }
    return (
        <>
            <Core.Breadcrumb
                heading="Credit Clarity"
                breadcrumb={breadcrumb}
            />
            <StatsDetailCards data={statsDetails} />
        </>
    )
}

export default CompanyDetails