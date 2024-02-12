import { Link } from "react-router-dom";
import "../styles/nav.css"
export default function Navbar() {
  return (
    <div className="nav">
      <img className ="company-logo" src="./assets/designo.png" alt="company logo" />
      <div className="navigation">
        <Link to="/about" className="nav-link" >OUR COMPANY</Link>
        <Link to="/locations" className="nav-link" >LOCATIONS</Link>
        <Link to="/contact" className="nav-link" >CONTACT</Link>
      </div>
    </div>
  );
};
