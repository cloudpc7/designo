import Products from "../Components/Products"
import Hero from "../Components/Hero"
import Feature from "../Components/Feature"

export default function Home({content, isDisplayed, btnDisplay, features}) {

    const featureItems = features.map(feature => (

        <Feature 
            featureImg={feature.image}
            featureTitle={feature.title}
            featureContent={feature.text}
        />
    ))

    return (
        <>
            <Hero 
                heroTitle={content[0].title}
                heroText={content[0].text}
                heroImage={content[0].image}
                heroLink="about"
                isDisplayed={isDisplayed}
                btnDisplay={btnDisplay}
                styles="hero"
                titleStyle="hero-title"
                imageStyle="phone"
            />
            <div className="products">
            <Products 
                styles="web-design"
                link="webdesign"
                cardTitle="WEB DESIGN"
            />
            <Products 
                styles="app-design"
                link="appdesign"
                cardTitle="APP DESIGN"
            />
            <Products 
                styles="graphic-design"
                link="graphicdesign"
                cardTitle="GRAPHIC DESIGN"
            />
            </div>
            <div className="features">
                {featureItems}
            </div>
        </>
    )

}