import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>TrackAura</h2>
        <p className="tagline">Healthy isn't a goal, it's a way of living.</p>
      </div>
      <div className="footer-info">
        <p><FaMapMarkerAlt /> Beirut, Lebanon</p>
        <p><FaEnvelope /> trackaura@gmail.com</p>
        <p><FaPhone /> +96181686540</p>
      </div>
      <div className="footer-social">
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
      </div>
    </footer>
  );
}

export default Footer;
