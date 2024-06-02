import styles from "./Destinations.module.css";
import Section from "../Components/Section/Section";
import Container from "../Components/Container/Container";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import PageHeading from "../Components/Headings/PageHeading";
import DestinationCard from "../Components/DestinationCard/DestinationCard";

export default function Destinations() {
  return (
    <>
      <Breadcrumb pageName="Destinations" />
      <Section className={styles.Section}>
        <Container>
          <PageHeading textAlign="center">Destinations</PageHeading>
        </Container>
      </Section>
    </>
  );
}
