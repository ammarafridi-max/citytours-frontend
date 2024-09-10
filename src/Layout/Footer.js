import logo from "./logo.png";
import styles from "./Footer.module.css";
import Container from "../components/Container/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Container className="row">
        <Column1 />
        <div className="col-6 col-lg">
          <p className={styles.ColHeading}>Quick Links</p>
          <a className={styles.Link} href="/">
            Home
          </a>
          <a className={styles.Link} href="about">
            About
          </a>
          <a className={styles.Link} href="tours">
            Tours
          </a>
          <a className={styles.Link} href="destinations">
            Destinations
          </a>
          <a className={styles.Link} href="blog">
            Blog
          </a>
        </div>
        <div className="col-6 col-lg">
          <p className={styles.ColHeading}>Legal</p>
          <a className={styles.Link} href="terms-and-conditions">
            Terms & Conditions
          </a>
          <a className={styles.Link}>Privacy Policy</a>
          <a className={styles.Link}>Company Verification</a>
          <a className={styles.Link}>Contact</a>
        </div>
        <div className="col-12 col-lg">
          <p className={styles.ColHeading} href="contact">
            Contact Us
          </p>
        </div>
      </Container>
    </footer>
  );
}

function Column1() {
  return (
    <div className="col-12 col-lg-4">
      <img src={logo} className={styles.Logo} />
      <p className={styles.About}>
        City Tours UAE is a leading travel agency based out of Sharjah, UAE,
        that helps travelers plan and book their vacations.
      </p>
      <div className={styles.SocialLinks}>
        <a href="https://www.facebook.com/citytours.ae" target="_blank">
          <FaFacebook className={`${styles.SocialLink} ${styles.Facebook}`} />
        </a>

        <a href="https://www.instagram.com/citytours.ae/" target="_blank">
          <FaInstagram className={`${styles.SocialLink} ${styles.Instagram}`} />
        </a>

        <a
          href="https://www.linkedin.com/company/city-tours-uae/"
          target="_blank"
        >
          <FaLinkedin className={`${styles.SocialLink} ${styles.LinkedIn}`} />
        </a>

        <a href="https://www.tiktok.com/@citytours.ae" target="_blank">
          <FaTiktok className={`${styles.SocialLink} ${styles.Tiktok}`} />
        </a>
      </div>
    </div>
  );
}
