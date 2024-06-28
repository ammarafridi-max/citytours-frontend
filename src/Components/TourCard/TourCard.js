import styles from "./TourCard.module.css";
import { BiTimeFive } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import PrimaryButton from "../Buttons/PrimaryButton";
import img from "./TourImage.png";
import { Link } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";

function TourCard({ url, image, name, duration, location, price }) {
  return (
    <div className={styles.CardExterior}>
      <a href={`tours/${url}`}>
        <div className={styles.Card}>
          <Image image={image} />
          <Detail
            name={name}
            duration={duration}
            location={location}
            price={price}
          />
        </div>
      </a>
    </div>
  );
}

function Image({ image }) {
  return (
    <div className={styles.ImageDiv}>
      <img src={image} className={styles.Image} />
      {/* <div className={styles.featuredTextDiv}>
        <p className={styles.featuredText}>10% OFF</p>
      </div> */}
    </div>
  );
}

function Detail({ name, duration, location, price }) {
  return (
    <div className={styles.TourDetail}>
      {/* <h6 className={styles.Subtitle}>National Day Holiday</h6> */}
      <h3 className={styles.Title}>{name}</h3>

      <p className={styles.IconDiv}>
        <IoTime className={styles.Icon} />
        <span className={styles.Duration}>{duration}</span>
      </p>

      <p className={styles.IconDiv}>
        <IoMdPin className={styles.Icon} />
        <span className={styles.Duration}>{location}</span>
      </p>

      <hr className="my-3" />

      <div className="row">
        <div className="col-12 m-auto light f-14" style={{ color: "grey" }}>
          from <br /> <span className={styles.Price}>AED {price}</span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
