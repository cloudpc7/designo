import { Link } from "react-router-dom"
import "../styles/products.css"

export default function Products({ link, cardTitle, styles}) {

  return (
      <Link to={link}  className={styles}>
        <h2>{cardTitle}</h2>
        <p>VIEW Projects</p>
      </Link>
  )
}