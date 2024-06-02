import Container from "../Components/Container/Container";
import Section from "../Components/Section/Section";
import styles from "./MobileNavigation.module.css";
import logo from "./logo.png";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MobileNavigation() {
  const [menuClass, setMenuClass] = useState(styles.Hidden);

  return (
    <nav className={styles.Navbar}>
      <Container
        className={`row justify-content-between align-items-center p-0 m-0`}
      >
        <div className="col-5 p-0">
          <img src={logo} className={styles.Logo} />
        </div>
        <div
          className="col-3 text-end p-0"
          onClick={() => {
            setMenuClass(styles.Show);
          }}
        >
          <IoIosMenu className={styles.Icon} />
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
          <Link href="/" className={styles.NavLink}>
            About
          </Link>
          <Link href="/" className={styles.NavLink}>
            Tours
          </Link>
          <Link href="/" className={styles.NavLink}>
            Visa
          </Link>
          <a href="/" className={styles.NavLink}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
