import "../styles/webdesign.css"
export default function WebdesignCard({cardTitle, cardText, cardImage}) {

    return (
        <div >
            <div className="webdesign-site">
            <img src={cardImage} className="webdesign-image" alt="design cards"/>
            <p className="webdesign-content" >{cardTitle}</p>
            <p className="webdesign-description">{cardText}</p>
            </div>
        </div>
    )
}