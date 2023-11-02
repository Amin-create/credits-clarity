import React from 'react'
import { Footer, Header, About, Home, TopContent } from '../components';
import team from "../assets/images/team/team.jpg";
import { contentAbout, topContentAbout } from '../data';


function AboutPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentAbout} />
            <About.OurMission />
            <About.BigImage img={team} />
            <About.TextContent data={contentAbout} />
            <Home.Cta />
            <Footer />
        </main>
    )
}

export default AboutPage