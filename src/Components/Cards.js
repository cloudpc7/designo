import "../styles/card.css"

export default function Cards({cardSite, cardDesign, cardTitle, cardText, cardImage, designTitle, designDescription, cardParagraph}) {
    return (

        <div className={cardSite}>
        <img src={cardImage} className={cardDesign} alt="design cards"/>
        <div className="card-content">
            <p className={designTitle} >{cardTitle}</p>
            <p className={designDescription}>{cardText}</p>
            <p className={designDescription}>{cardParagraph}</p>
        </div>
        </div>
    )
}