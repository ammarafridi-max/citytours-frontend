import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";

function Breadcrumb({ pageName, subPageName }) {
  return (
    <Section className={styles.Breadcrumb}>
      <Container>
        {/* <h1 className="breadcrumb-page-name regular">{pageName}</h1> */}
        <span>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </span>
        <span className="mx-2">
          <KeyboardArrowRightIcon />
        </span>
        <span>{pageName}</span>
        {subPageName && (
          <>
            <span className="mx-2">
              <KeyboardArrowRightIcon />
            </span>
            <span>{subPageName}</span>
          </>
        )}
      </Container>
    </Section>
  );
}

export default Breadcrumb;
