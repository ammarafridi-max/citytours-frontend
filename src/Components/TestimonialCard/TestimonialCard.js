import styles from "./TestimonialCard.module.css";
import img from "./david.png";

export default function TestimonialCard({ title, name, src, children, type }) {
  return (
    <div
      className={`${styles.testimonialCard} ${
        type === "secondary" && styles.secondary
      }`}
    >
      <div className={styles.ImageContainer}>
        <img
          src={src}
          alt={`Testimonial by ${name} about My Dummy Ticket`}
          title={`Testimonial by ${name} about My Dummy Ticket`}
        />
      </div>
      <div className={styles.Content}>
        <p>{children}</p>
      </div>
      <p className={styles.Author}>{name}</p>
    </div>
  );
}

// alt={`Testimonial about City Tours UAE by ${name}`}
