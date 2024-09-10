import Container from "../../../components/Container/Container";
import Section from "../../../components/Section/Section";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import styles from "./Benefits.module.css";
import shieldIcon from "./shield-icon.png";
import timeIcon from "./time-icon.png";
import usdIcon from "./usd-icon.png";

export default function Benefits() {
  return (
    <Section type="secondary">
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Your Trusted Partner for Unforgettable Journeys"
        >
          Why Choose Us?
        </SectionTitle>
        <div className="row m-0 p-0 justify-content-between">
          <IconCard
            icon={shieldIcon}
            title="Reliable"
            text="We partner with trusted local guides to create memorable tour packages. Each package is meticulously crafted to ensure the highest standards, providing peace of mind for travelers around the world."
          />
          <IconCard
            icon={timeIcon}
            title="Quick"
            text="Our efficient booking process allows you to secure your tour package instantly. Simply fill out a short form, and within minutes, you will receive all the details of your upcoming adventure, ready for your travel plans."
          />
          <IconCard
            icon={usdIcon}
            title="Affordable"
            text="Our tour packages are designed to be the most cost-effective option available. We offer the best rates in the market, ensuring that everyone can experience the joys of travel without breaking the bank."
          />
        </div>
      </Container>
    </Section>
  );
}

function IconCard({ icon, title, text }) {
  return (
    <div className={styles.IconCard}>
      <div className={styles.Icon}>
        <img src={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

{
  /* <h2 className="section-heading">Sample Ticket</h2>
        <div className="col-12 col-lg-6 mx-auto">
          <img src={img} className={styles.Img} alt="A sample dummy ticket" />
        </div> */
}
