import styles from "./DestinationDetail.module.css";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeading from "../../components/Headings/PageHeading";
import SectionHeading from "../../components/Headings/SectionHeading";
import TourCard from "../../components/TourCard/TourCard";

export default function DestinationDetail() {
  return (
    <>
      <Breadcrumb pageName="Destinations" subPageName="United Arab Emirates" />
      <Section className={styles.Section}>
        <Container className={`${styles.IntroSection} row`}>
          <div className="col-12 col-lg-7 p-0">
            <PageHeading className={styles.Heading}>
              United Arab Emirates
            </PageHeading>
            <p>
              The United Arab Emirates is an ideal travel destination for
              travelers of all types and budgets. Whether you're a couple
              seeking a romantic escape, a solo adventurer searching for an
              affordable trip, or a family looking for a safe and secure
              vacation spot, the UAE offers something for everyone. With its
              blend of luxurious experiences, rich cultural heritage, and modern
              attractions, you'll find countless opportunities to create
              unforgettable memories.{" "}
            </p>
            <div className={styles.QuickFacts}>
              <p>
                <span>Capital City:</span> Abu Dhabi
              </p>
              <p>
                <span>Best Time To Visit:</span> November to April
              </p>
              <p>
                <span>Official Language:</span> Arabic
              </p>
              <p>
                <span>Currency:</span> AED (Arab Emirates Dirhams)
              </p>
              <p>
                <span>National Day:</span> 2nd December
              </p>
              <p>
                <span>Population:</span> 9.9 Million
              </p>
            </div>
          </div>
          <div className={`col-12 col-lg-5 ${styles.Img}`}></div>
        </Container>
      </Section>
      <Tours />
    </>
  );
}

function Tours() {
  return (
    <Section>
      <Container>
        <SectionHeading textAlign="center" className={styles.Heading}>
          Tours
        </SectionHeading>
        <div className="row">
          <div className="col-lg-3 p-0">
            <TourCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
