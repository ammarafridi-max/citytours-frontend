import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ name, profession, children }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.Author}>
        <img className={styles.Img} />
        <div className="align-items-center my-auto">
          <p className={styles.Name}>John Doe</p>
          <span className={styles.Profession}>Traveler</span>
        </div>
      </div>
      <p className={styles.TestimonialText}>
        Some text. Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}
