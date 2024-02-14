import Hero from "../Components/Hero"
import Cards from "../Components/Cards"
import Feature from "../Components/Feature"
import "../styles/about.css"

export default function About({content, isDisplayed, aboutCards, features}) {

    const featureItems = features.map(feature => (
        <Feature
            featureImg={feature.image}
            featureTitle={feature.title}
            isDisplayed={isDisplayed}
        />
    ))

    return (
        <>
        <Hero 
            heroTitle={content[4].title}
            heroText={content[4].text}
            heroImage={content[4].image}
            styles="hero-about"
            titleStyle="hero-about-title"
            isDisplayed={isDisplayed}
            imageStyle="hero-about-img"
        />
        <Cards 
            cardSite="card-site-about"
            cardDesign="about-design-img"
            cardTitle={aboutCards[0].title}
            cardText={aboutCards[0].text}
            cardParagraph={aboutCards[0].paragraph}
            cardImage={aboutCards[0].image}
            designTitle="about-title"
            designDescription="about-description"
        />
        <div className="features">
            {featureItems}
        </div>

        <Cards 
            cardSite="card-site-about-deal"
            cardDesign="about-design-img-deal"
            cardTitle={aboutCards[1].title}
            cardText={aboutCards[1].text}
            cardParagraph={aboutCards[1].paragraph}
            cardImage={aboutCards[1].image}
            designTitle="about-title"
            designDescription="about-description"
        />

        </>
    )
}