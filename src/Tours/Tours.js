import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Section from "../Components/Section/Section";
import Container from "../Components/Container/Container";
import TourCard from "../Components/TourCard/TourCard";
import styles from "./Tours.module.css";

export default function Tours() {
  return (
    <Section>
      <Breadcrumb pageName="Tours" />
      <Container py="40px">
        <div className={styles.Title}>4 tours found</div>
        <FilterBox />
        <div className={`row`}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </Container>
    </Section>
  );
}

function FilterBox() {
  return (
    <div className={styles.FilterBox}>
      <p className="bold">Filter By</p>
    </div>
  );
}
