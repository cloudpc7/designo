import { useLayoutEffect } from "react";
import "../styles/webdesign.css"
import Hero from "../Components/Hero"
import Products from "../Components/Products";
import WebdesignCard from "../Components/WebdesignCard";

export default function WebDesign({content, isDisplayed, cards}){

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    const designCard = cards.map(card => (
        <WebdesignCard 
            cardTitle = {card.title}
            cardText = {card.text}
            cardImage = {card.image}
        />
    ))

    return (
        <>
            <Hero 
                heroTitle={content[1].title}
                heroText={content[1].text}
                heroLink="about"
                styles="hero-webdesign"
                titleStyle="hero-webdesign-title"
            />
            <div className="webpage-images">
                {designCard}
            </div>
            <div className="web-design-products">
                <Products 
                    styles="app"
                    link="appdesign"
                    cardTitle="APP DESIGN"
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