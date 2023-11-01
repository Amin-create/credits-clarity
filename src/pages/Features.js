import React from 'react'
import { Footer, Header, ThreeCards, TopContent, HorizontalContents, Features } from '../components';
import app1 from "../assets/images/app-screens/app1.png"
import app2 from "../assets/images/app-screens/app2.png"
import app3 from "../assets/images/app-screens/app3.png"
import { Cta } from '../components/home';

const topContent = {
    firstHeading: "Features",
    secondHeading: "Lorem Ipsum is simply dummy text the printing and typesetting industry",
    firstText: "Let’s get to know each other! Here is our story.",
    secondText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, "
}

const threeCardsContent = [
    {
        id: "1",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: "2",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: "3",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];
const horizontalContents = {
    heading: "We are the next generation productivity software helping sales and revenue teams navigate their daily work with ebb and flow.",
    texts: [
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    ]
}
const appFeaturesDescriptions = [
    {
        id: "1",
        img: app1,
        heading: "Feature Heading",
        texts: ["Loresddm Ipsum is simply dummy text of the printing and typetingde industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
    },
    {
        id: "2",
        img: app2,
        heading: "Feature Heading",
        texts: ["aLoresddm Ipsum is simply dummy text of the printing and typetingde industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
    },
    {
        id: "3",
        img: app3,
        heading: "Feature Heading",
        texts: ["Loresddm Ipsum is simply dummy text of the printing and typetingde industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
    }
]
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