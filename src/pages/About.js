import React from 'react'
import { Footer, Header, About } from '../components';

function AboutPage() {
    return (
        <main className="bg-main">
            <Header />
            <About.TopContent />
            {/* our mission */}
            <Footer />
        </main>
    )
}

export default AboutPage