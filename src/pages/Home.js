import React from 'react'
import { Home, Footer, Header } from '../components';
import { faqDataHome, textArrayHome } from '../data';

function HomePage() {
    return (
        <main className="bg-main">
            <Header />
            <Home.Hero />
            <Home.Help data={textArrayHome} />
            <Home.ContentImage />
            <Home.Faq data={faqDataHome} />
            <Home.Cta />
            <Footer />
        </main>
    )
}

export default HomePage