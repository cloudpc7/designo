import "../styles/appdesign.css"

export default function AppdesignCard({cardImage, cardTitle, cardText}) {
    return (
        <div >
        <div className="appdesign-site">
        <img src={cardImage} className="appdesign-image" alt="design cards"/>
        <p className="appdesign-content" >{cardTitle}</p>
        <p className="appdesign-description">{cardText}</p>
        </div>
    </div>
    )
}