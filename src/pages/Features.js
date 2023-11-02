import React from 'react'
import { Footer, Header, ThreeCards, TopContent, HorizontalContents, Features } from '../components';
import { Cta } from '../components/home';
import { appFeaturesDescriptions, horizontalContents, threeCardsContent, topContent } from '../data';


function FeaturesPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContent} />
            <ThreeCards data={threeCardsContent} />
            <HorizontalContents data={horizontalContents} />
            <Features.AppFeaturesDescription data={appFeaturesDescriptions} />
            <Cta />
            <Footer />
        </main>
    )
}

export default FeaturesPage