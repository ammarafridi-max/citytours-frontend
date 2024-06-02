import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DocumentMeta from "react-document-meta";
import styles from "./Activities.module.css";
import ActivityCard from "../Components/ActivityCard/ActivityCard";

export default function Activities() {
  const meta = {
    title: "Activities In Dubai | City Tours UAE",
    description: "I am a description, and I can create multiple tags",
  };
  const [activities, setActivities] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "";
  const city = queryParams.get("location") || "";

  useEffect(() => {
    const url = `http://localhost:3001/activities?name=${name}&location=${city}`;
    axios
      .get(url)
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DocumentMeta {...meta} />

      {/* <Breadcrumb pageName="Activities" /> */}

      <div className="col-lg-10 col-11 mx-auto activities-page">
        <form className="mx-auto activity-filter-box row mb-5">
          <div className="col-lg-4">
            <input
              type="text"
              name="activity-name-search"
              className="w-100 input-2"
              placeholder="Search Activity Name"
            />
          </div>
          <div className="col-lg-4">
            <input
              type="text"
              name="activity-location-search"
              className="w-100 input-2"
              placeholder="Search Activity Location"
            />
          </div>
          <div className="col-lg-4">
            <input
              type="text"
              name="activity-price-search"
              className="w-100 input-2"
              placeholder="Price Range"
            />
          </div>
        </form>

        <div className="row">
          {activities.map((activity) => (
            <ActivityCard
              key={activity._id}
              url={activity.url}
              image={activity.image}
              name={activity.name}
              category={activity.location.city}
              price={activity.tickets[0].price.adults}
              duration={activity.duration}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// import ActivityCard from "../../Components/ActivityCard/ActivityCard"
// import activityData from "../../Components/Data/activityData"
// import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb"

// function createActivityCard(activity){
//     return(

//         <ActivityCard
//         name={activity.name}
//         image={activity.image}
//         price={activity.tickets[0].price.adults}
//         duration={activity.duration}
//         reviewAverage={activity.reviewAverage}
//         reviewNumbers={activity.reviewNumbers}
//         activityUrl={activity.url}
//         />
//     )

// }

// function ActivitiesPage () {
//     return(
//         <>
//         <Breadcrumb pageName="Activities" />
//         <section className="col-lg-10 mx-auto row py-5">
//             {activityData.map(createActivityCard)}
//         </section>
//         </>
//     )
// }

// export default ActivitiesPage
