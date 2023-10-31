import React from 'react'
import { Home, Footer, Header } from '../components';

function HomePage() {
    return (
        <main className="bg-main">
            <Header />
            <Home.Hero />
            <Home.Help />
            <Home.ContentImage />
            <Home.Faq />
            <Home.Cta />
            <Footer />
        </main>
    )
}

export default HomePage