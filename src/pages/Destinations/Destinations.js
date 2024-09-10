import styles from "./Destinations.module.css";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeading from "../../components/Headings/PageHeading";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

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
