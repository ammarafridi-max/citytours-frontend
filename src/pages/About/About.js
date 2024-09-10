import styles from "./About.module.css";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import PageHeading from "../../components/Headings/PageHeading";
import SectionHeading from "../../components/Headings/SectionHeading";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { FaPassport, FaGlobeAmericas } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About City Tours UAE</title>
      </Helmet>
      <Breadcrumb pageName="About Us" />
      <Section py="50px">
        <Container>
          <PageHeading>About Us</PageHeading>
          <div className="col-12 col-lg-7">
            <p className="mt-4">
              City Tours LLC is a pioneering travel agency and tour operator
              that has been serving the UAE community since 1998. Established in
              the heart of Bur Dubai, we have grown to become one of the oldest
              and most trusted names in the region's travel industry.
              <br />
              <br />
              Our extensive offerings include meticulously crafted holiday
              packages to destinations across the globe, thrilling activities
              and excursions, as well as comprehensive visa assistance services.
              We take immense pride in our partnerships with highly acclaimed
              Destination Management Companies (DMCs), enabling us to provide
              seamless and exceptional travel experiences tailored to our
              clients' unique preferences.
              <br />
              <br />
              At the core of City Tours LLC lies an unwavering commitment to
              prioritizing customer happiness above all else. Our team of
              seasoned experts possesses a genuine passion for exploration,
              crafting personalized journeys that exceed expectations. Through
              dedication, attention to detail, and a relentless pursuit of
              excellence, we have solidified our reputation as a brand
              synonymous with quality, reliability, and exceptional service
            </p>
          </div>
          <div className="col-12 col-lg-5"></div>

          <SectionHeading mt="60px" mb="60px" textAlign="center">
            Our Services
          </SectionHeading>

          <div className="row justify-content-between">
            <div className={styles.ServiceCard}>
              <div className={styles.IconBox}>
                <FaPassport className={styles.Icon} />
              </div>
              <h3 className={styles.ServiceTitle}>Visa Assistance</h3>
              <p className={styles.ServiceDescription}>
                We provide end-to-end visa application and assistance services,
                including guidance on documentation, form-filling assistance,
                and submission for Schengen, United States, United Kingdom,
                Turkey, Canada, and the UAE.
              </p>
            </div>
            <div className={styles.ServiceCard}>
              <div className={styles.IconBox}>
                <FaGlobeAmericas className={styles.Icon} />
              </div>
              <h3 className={styles.ServiceTitle}>Holidays</h3>
              <p className={styles.ServiceDescription}>
                Customized and fixed packages from the UAE to Azerbaijan,
                Georgia, Armenia, Turkey, Malaysia, Singapore, and other
                countries. Our packages include flights, accommodation,
                transfers, and optional activities tailored to your preferences.
              </p>
            </div>
            <div className={styles.ServiceCard}>
              <div className={styles.IconBox}>
                <MdTour className={styles.Icon} />
              </div>
              <h3 className={styles.ServiceTitle}>Activities</h3>
              <p className={styles.ServiceDescription}>
                We provide a wide range of activities in the UAE including city
                tours, desert safaris, dhow cruise tours, entry tickets to theme
                parks, waterparks, museums, and zoos, and other excursions like
                hot air balloon rides.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
