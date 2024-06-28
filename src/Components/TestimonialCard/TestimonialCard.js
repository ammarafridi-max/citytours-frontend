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
        City Tours is my ultimate one-stop shop for all my traveling needs. My
        job requires me to be constantly traveling and so, I need to book
        services often. With City Tours, I don't worry about getting visas,
        booking flights, hotels, and arranging transfers
      </p>
    </div>
  );
}
