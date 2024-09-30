const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          <li>
            <a href="#hero" className="footer-link">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              services
            </a>
          </li>
          <li>
            <a href="#featured" className="footer-link">
              featured
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              contact
            </a>
          </li>
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="facebook"
              className="footer-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="twitter"
              className="footer-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="instagram"
              className="footer-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="youtube"
              className="footer-icon"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span> {currentYear} </span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;

const currentYear = new Date().getFullYear();
