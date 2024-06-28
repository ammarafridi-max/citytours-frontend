import { useEffect, useState } from "react";
import styles from "./Tours.module.css";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Section from "../Components/Section/Section";
import Container from "../Components/Container/Container";
import TourCard from "../Components/TourCard/TourCard";
import { FaChevronDown } from "react-icons/fa";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tours`);
        if (res.status === 404) throw new Error("Tours not found");
        if (!res.ok) throw new Error("Could not fetch tours");
        const data = await res.json();
        console.log(data);
        setTours(data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchTours();
  }, []);

  return (
    <Section>
      <Breadcrumb pageName="Tours" />
      <Container py="40px">
        {tours.length === 0 ? (
          <h1>No tours found</h1>
        ) : (
          <>
            <div className={styles.Title}>{tours.length} tours found</div>
            <div className={`row`}>
              <div className="col-12 col-lg-3 ps-0">
                <FilterBox />
              </div>
              <div className="col-12 col-lg-9 row p-0">
                {tours.map((tour) => {
                  return (
                    <div className="col-12 col-lg-4 p-0">
                      <TourCard
                        url={tour.url}
                        name={tour.name}
                        image={tour.image}
                        duration={tour.duration}
                        location={`${tour.location.city}, ${tour.location.country}`}
                        price={tour.price.adults}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}

function FilterBox() {
  return (
    <div className={styles.FilterBox}>
      <p className="bold">Filter</p>

      <h6 className={styles.FilterTitle}>
        <span>Price </span>
        <span className={styles.FilterTitleIcon}>
          <FaChevronDown />
        </span>
      </h6>
    </div>
  );
}
