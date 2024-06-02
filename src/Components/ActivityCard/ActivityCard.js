import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./ActivityCard.css";

function ActivityCard(props) {
  return (
    
    <div className="col-lg-12 col-12 p-0 activity-card">

      <div className="activity-card-image">
        <a href={`/activities/${props.url}`}>
          <img src={props.image} className="activity-card-image" alt="" />  
        </a>
      </div>
      
      <div className="activity-card-content">

        <a href={`/activities/${props.url}`} className="activity-link">
          <h3 className="activity-name card-title activity-link">{props.name}</h3>
        </a>

        <div className="activity-review f-12">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="activity-card-category f-14"> {props.category} </span>
        </div>

        <hr className="activity-card-divider" />
        <div className="activity-bottom-section row">

          <div className="activity-pricing">
            from <span className="activity-price">AED {props.price}</span>
          </div>

          <div className="activity-duration text-end">
            <FontAwesomeIcon icon={faClock} style={{fontSize:"14px"}} />
            <span className="activity-hours f-14">{props.duration}</span>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default ActivityCard;
