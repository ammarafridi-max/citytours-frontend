import Container from "../components/Container/Container";
import styles from "./MobileNavigation.module.css";
import logo from "./logo.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

export const menuLinks = [
  { name: "Tours", url: "/tours" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function MobileNavigation() {
  const [menuClass, setMenuClass] = useState(styles.Hidden);

  return (
    <nav className={styles.Navbar}>
      <Container>
        <div className="row align-items-center">
          <img src={logo} className={styles.Logo} />
          <span
            className={styles.IconSpan}
            onClick={() => setMenuClass(styles.Show)}
          >
            <LuMenu className={styles.Icon} />
          </span>
        </div>
      </Container>
      <Modal
        className={menuClass}
        onClick={() => {
          setMenuClass(styles.Hidden);
        }}
      />
    </nav>
  );
}

function Modal(props) {
  return (
    <div className={`${styles.ModalBg} ${props.className}`}>
      <div className={styles.Modal}>
        <div className={`col-12 text-end`} onClick={props.onClick}>
          <IoClose className={styles.CloseIcon} />
        </div>
        <div className={styles.NavLinks}>
          {menuLinks.map((link) => (
            <a href={link.url} className={styles.NavLink}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
