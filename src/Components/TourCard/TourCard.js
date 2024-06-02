import styles from "./TourCard.module.css";
import { BiTimeFive } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import PrimaryButton from "../Buttons/PrimaryButton";
import img from "./TourImage.png";
import { Link } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";

function TourCard() {
  return (
    <div className={styles.CardExterior}>
      <a href="/tours/abc">
        <div className={styles.Card}>
          <Image />
          <Detail />
        </div>
      </a>
    </div>
  );
}

function Image(props) {
  return (
    <div className={styles.ImageDiv}>
      <img src={img} className={styles.Image} />
      <div className={styles.featuredTextDiv}>
        <p className={styles.featuredText}>10% OFF</p>
      </div>
    </div>
  );
}

function Detail(props) {
  return (
    <div className={styles.TourDetail}>
      {/* <h6 className={styles.Subtitle}>National Day Holiday</h6> */}
      <h3 className={styles.Title}>Fabulous Azerbaijan</h3>

      <p className={styles.IconDiv}>
        <IoTime className={styles.Icon} />
        <span className={styles.Duration}>3 nights / 4 days</span>
      </p>

      <p className={styles.IconDiv}>
        <IoMdPin className={styles.Icon} />
        <span className={styles.Duration}>Zurich, Switzerland</span>
      </p>

      <hr className="my-3" />

      <div className="row">
        <div className="col-12 m-auto light f-14" style={{ color: "grey" }}>
          from <br /> <span className={styles.Price}>AED 1,999</span>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
