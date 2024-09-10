import logo from "./logo.png";
import styles from "./Navigation.module.css";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Container from "../components/Container/Container";
import { menuLinks } from "./MobileNavigation";

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
      <a href="/">
        <img src={logo} className={styles.NavLogo} />
      </a>
    </div>
  );
}
function LinksBox() {
  return (
    <div className={styles.NavLinksBox}>
      {menuLinks.map((link) => (
        <a href={link.url} className={styles.NavLink}>
          {link.name}
        </a>
      ))}
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
