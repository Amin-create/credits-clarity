import React from 'react'
import { Home, Footer, Header, TopContent, Contact } from '../components';
import { topContentContact } from '../data';

function ContactPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentContact} />
            <Contact.ContactForm />
            {/* <About.BigImage img={team} /> */}
            <Home.Cta />
            <Footer />
        </main>
    )
}

export default ContactPage