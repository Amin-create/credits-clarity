import React from 'react'
import { topContentTermsAndConditions } from '../data';
import { Footer, Header, TopContent } from '../components';

function TermsAndConditionsPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentTermsAndConditions} />
            <Footer />
        </main>
    )
}

export default TermsAndConditionsPage