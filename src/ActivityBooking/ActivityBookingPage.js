import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./ActivityBooking.module.css";
import DocumentMeta from "react-document-meta";

import axios from "axios";

export default function ActivityBooking() {
  const { url } = useParams();
  const [activity, setActivity] = useState(null);

  const [adultsQuantity, setAdultsQuantity] = useState(0);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [infantQuantity, setInfantQuantity] = useState(0);

  let adultTotal = 0;
  let childrenTotal = 0;
  let infantTotal = 0;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/activities/${url}/booking`)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <section>
      <div className="col-lg-10 mx-auto py-5">
        <h1 className="f-32 bold">{activity.name} Booking</h1>
        <hr className="my-4" />
        <h3 className="f-24">1. Select ticket type:</h3>
        <br />
        <div className="row">
          {activity.tickets.map((ticket) => {
            return (
              <>
                <div className="activity-booking-ticket-box col-lg-4 col-12">
                  <h4 className="f-20">{ticket.name}</h4>
                  <p className="f-14 my-2">
                    <i>{ticket.description}</i>
                  </p>
                  <hr className="my-3" />

                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <p className="bold">
                        Adults: <span>AED {ticket.price.adults}</span>
                      </p>
                      <p className="f-14">Aged {activity.ageRange.adults}</p>
                    </div>
                    <div className="col-lg-6 justify-content-end text-end">
                      <button
                        className="activity-subtract-button"
                        onClick={() => {
                          setAdultsQuantity(Math.max(adultsQuantity - 1, 0));
                        }}
                      >
                        -
                      </button>
                      <span>{adultsQuantity}</span>
                      <button
                        className="activity-add-button"
                        onClick={() => {
                          setAdultsQuantity(Math.min(adultsQuantity + 1, 9));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <p className="bold">
                        Children: <span>AED {ticket.price.children}</span>
                      </p>
                      <p className="f-14">Aged {activity.ageRange.children}</p>
                    </div>
                    <div className="col-lg-6 justify-content-end text-end">
                      <button
                        className="activity-subtract-button"
                        onClick={() => {
                          setChildrenQuantity(
                            Math.max(childrenQuantity - 1, 0)
                          );
                        }}
                      >
                        -
                      </button>
                      <span>{childrenQuantity}</span>
                      <button
                        className="activity-add-button"
                        onClick={() => {
                          setChildrenQuantity(childrenQuantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <p className="bold">
                        Infants: <span>AED {ticket.price.infants}</span>
                      </p>
                      <p className="f-14">Aged {activity.ageRange.infants}</p>
                    </div>
                    <div className="col-lg-6 justify-content-end text-end">
                      <button
                        className="activity-subtract-button"
                        onClick={() => {
                          setInfantQuantity(Math.max(infantQuantity - 1, 0));
                        }}
                      >
                        -
                      </button>
                      <span>{infantQuantity}</span>
                      <button
                        className="activity-add-button"
                        onClick={() => {
                          setInfantQuantity(infantQuantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <h5 className="text-end mt-3">
                    Total: AED{" "}
                    {adultsQuantity * ticket.price.adults +
                      childrenQuantity * ticket.price.children +
                      infantQuantity * ticket.price.infants}{" "}
                  </h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
