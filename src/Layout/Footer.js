import logo from "./logo.png";
import styles from "./Footer.module.css";
import Container from "../Components/Container/Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <Container className="row">
        <Column1 />
        <div className="col-6 col-lg">
          <p className={styles.ColHeading}>Quick Links</p>
          <Link className={styles.Link} to="/">
            Home
          </Link>
          <Link className={styles.Link}>About</Link>
          <Link className={styles.Link}>Tours</Link>
          <Link className={styles.Link}>Destinations</Link>
          <Link className={styles.Link} to="/blog">
            Blog
          </Link>
        </div>
        <div className="col-6 col-lg">
          <p className={styles.ColHeading}>Legal</p>
          <Link className={styles.Link}>Terms & Conditions</Link>
          <Link className={styles.Link}>Privacy Policy</Link>
          <Link className={styles.Link}>Company Verification</Link>
          <Link className={styles.Link}>Contact</Link>
        </div>
        <div className="col-12 col-lg">
          <p className={styles.ColHeading}>Contact Us</p>
        </div>
      </Container>
      <ScrollUpBtn />
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
        <Link>
          <FaFacebook className={`${styles.SocialLink} ${styles.Facebook}`} />
        </Link>

        <Link>
          <FaInstagram className={`${styles.SocialLink} ${styles.Instagram}`} />
        </Link>

        <Link>
          <FaLinkedin className={`${styles.SocialLink} ${styles.LinkedIn}`} />
        </Link>

        <Link>
          <FaTiktok className={`${styles.SocialLink} ${styles.Tiktok}`} />
        </Link>
      </div>
    </div>
  );
}

function ScrollUpBtn() {
  const [className, setClassName] = useState(styles.Hidden);

  if (window.screenTop === "1500px") {
    console.log(window);
  }

  return (
    <div className={`${styles.UpIcon} ${className}`}>
      <MdArrowUpward />
    </div>
  );
}
