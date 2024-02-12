import "../styles/feature.css"

export default function Feature() {
  return (
    <div className="features">
      <div className="passion">
        <img  className="feature-icon" alt="passion" src="./assets/home/desktop/illustration-passionate.svg"/>
        <p className="feature-title">PASSIONATE</p>
        <p className="feature-description">
          Each project starts with an in-depth brand research to ensure
          we only create products that serve a purpose. We merge art,
          design and technology into exciting new solutions. 
        </p>
      </div>
      <div className="resourceful">
        <img className="feature-icon" src="./assets/home/desktop/illustration-resourceful.svg" alt="resourceful"/>
        <p className="feature-title">RESOURCEFUL</p>
        <p className="feature-description">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration.
          It guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div className="friendly">
        <img className="feature-icon" src="./assets/home/desktop/illustration-friendly.svg" alt="friendly"/>
        <p className="feature-title">FRIENDLY</p>
        <p className="feature-description" >
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the 
          best experience a company can provide.
        </p>
      </div>
    </div>
  )
}