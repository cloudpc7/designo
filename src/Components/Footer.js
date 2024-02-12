import "../styles/footer.css"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div>
          <img
            className="footer-logo"
            src="./assets/shared/desktop/logo-light.png"
            alt="company logo"
          />
        </div>

        <div className="footer-navbar">
          <p>OUR COMPANY</p>
          <p>LOCATIONS</p>
          <p>CONTACT</p>
        </div>
      </div>
      <div className="footer-contact">
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-862-8967</p>
          <p>M : contact@designo.com</p>
        </div>
        <div className="social-icons">
          <img src="./assets/shared/desktop/icon-facebook.svg" alt="facebook"/>
          <img src="./assets/shared/desktop/icon-youtube.svg" alt="youtube"/>
          <img src="./assets/shared/desktop/icon-twitter.svg" alt="twitter"/>
          <img src="./assets/shared/desktop/icon-pinterest.svg" alt="pinterest"/>
          <img src="./assets/shared/desktop/icon-instagram.svg" alt="instagram"/>
        </div>
      </div>
    </div>
  );
};
