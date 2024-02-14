import "../styles/feature.css"

export default function Feature({featureImg, featureTitle,featureContent, isDisplayed}) {
  return (
      <div>
        <img  className="feature-icon" src={featureImg} alt=""/>
        <p className="feature-title">{featureTitle}</p>
        <p className="feature-description">{featureContent}</p>
        { isDisplayed && <button className="location-btn">SEE LOCATION</button>}
      </div>
  )
}