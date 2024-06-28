import logo from "./logo.png";
import styles from "./Navigation.module.css";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import Container from "../Components/Container/Container";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className={styles.Header}>
      <Container>
        <nav className={styles.Navigation}>
          <Logo />
          <LinksBox />
          <CTA />
        </nav>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <div className={styles.NavLogoBox}>
      <Link to="/">
        <img src={logo} className={styles.NavLogo} />
      </Link>
    </div>
  );
}
function LinksBox() {
  return (
    <div className={styles.NavLinksBox}>
      <NavLink to="/tours" className={styles.NavLink}>
        Tours
      </NavLink>
      <Link to="/destinations" className={styles.NavLink}>
        Destinations
      </Link>
      <Link to="/blog" className={styles.NavLink}>
        Blog
      </Link>
      <NavLink to="/about" className={`${styles.NavLink}`}>
        About
      </NavLink>
      <Link to="/contact" className={styles.NavLink}>
        Contact
      </Link>
    </div>
  );
}

function CTA() {
  return (
    <div className={styles.NavCTABox}>
      <PrimaryButton>Contact Us</PrimaryButton>
    </div>
  );
}
