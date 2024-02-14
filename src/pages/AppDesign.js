import { useLayoutEffect } from "react"

import "../styles/appdesign.css"
import Hero from "../Components/Hero"
import AppdesignCard from "../Components/AppdesignCard";
import Products from "../Components/Products";

export default function AppDesign({content, appCards, isDisplayed}) {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    const apps = appCards.map( card => (
        <AppdesignCard 
            cardImage={card.image}
            cardText={card.text}
            cardTitle={card.title}
        />
    ))

    return (
        <>
            <Hero 
                heroTitle={content[2].title}
                heroText={content[2].text}
                heroLink="about"
                styles="hero-appdesign"
                titleStyle="hero-appdesign-title"
            />
            <div className="app-images">
                {apps}
            </div>
            <div className="web-design-products">
                <Products 
                    styles="web-design"
                    link="webdesign"
                    cardTitle=" WEB DESIGN"
                />
                <Products 
                    styles="graphic"
                    link="graphicdesign"
                    cardTitle="GRAPHIC DESIGN"
                />
            </div>
        </>
    )
}