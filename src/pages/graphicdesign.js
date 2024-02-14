
import Hero from "../Components/Hero";
import GraphicdesignCard from "../Components/GraphicdesignCard"
import Products from "../Components/Products"
import { useLayoutEffect } from "react";

export default function GraphicDesign({content, cards}) {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    const graphics = cards.map(card => (
        <GraphicdesignCard 
            cardImage={card.image}
            cardTitle={card.title}
            cardText={card.text}
        />
    ))

    return (
        <>
            <Hero 
                heroTitle={content[3].title}
                heroText={content[3].text}
                heroLink="about"
                styles="hero-graphicdesign"
                titleStyle="hero-graphicdesign-title"
            />
            <div className="app-images">
                {graphics}
            </div>
            <div className="web-design-products">
                <Products 
                    styles="web-design"
                    link="webdesign"
                    cardTitle="WEB DESIGN"
                />
                <Products 
                    styles="graphic-app"
                    link="appdesign"
                    cardTitle="APP DESIGN"
                />
            </div>
        </>
    )
}