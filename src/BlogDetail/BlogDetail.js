import Container from "../Components/Container/Container";
import Section from "../Components/Section/Section";
import styles from "./BlogDetail.module.css";
import img from "./travel.png";

export default function BlogDetail() {
  return (
    <Section className={styles.Section}>
      <Container>
        <div className="col-12 col-lg-10 mx-auto">
          <h1 className={styles.Title}>
            How to build your dream holiday package?
          </h1>
          <div className={styles.ImgDiv}>
            <img src={img} className={styles.Img} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
