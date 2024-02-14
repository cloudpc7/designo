import "../styles/graphicdesign.css"

export default function GraphicdesignCard({cardImage, cardTitle, cardText}) {
    return (
        <>
            <div className="graphicdesign-site">
            <img src={cardImage} className="graphicdesign-image" alt="design cards"/>
            <p className="graphicdesign-content" >{cardTitle}</p>
            <p className="graphicdesign-description">{cardText}</p>
            </div>
        </>
    )
}