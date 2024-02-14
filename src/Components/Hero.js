import { Link } from "react-router-dom";
import "../styles/hero.css"

export default function Hero({heroTitle, heroText, heroLink,heroImage, isDisplayed,styles,titleStyle,imageStyle, btnDisplay}) {

  return (
    <>
    <div className={styles}>
      <div className={titleStyle}>
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
        {
         btnDisplay && <Link to={heroLink}>
          <button className="btn">LEARN MORE</button>
        </Link>
        }
        
      </div>
        {
         isDisplayed && <img className={imageStyle} src={heroImage} alt="phone" />
        }
    </div>
    </>
  );
};

