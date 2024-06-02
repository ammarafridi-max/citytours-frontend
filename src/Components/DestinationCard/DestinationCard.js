import styles from "./DestinationCard.module.css";

function DestinationCard(props) {
  return (
    <div className={styles.destinationCard}>
      <a href={`destinations/${props.href}`}>
        <div className={styles.destinationImageDiv}>
          <img src={props.img} className={styles.destinationImage} />
        </div>
        <div className={styles.DestinationDetail}>
          <h4>{props.name}</h4>
          <p>4 tours</p>
        </div>
      </a>
    </div>
  );
}

export default DestinationCard;
