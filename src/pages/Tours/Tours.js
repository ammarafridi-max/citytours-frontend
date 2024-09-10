import { useEffect, useState } from "react";
import styles from "./Tours.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import TourCard from "../../components/TourCard/TourCard";
import { FaChevronDown } from "react-icons/fa6";

import { fetchAllTours } from "../../services/tourServices";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    async function fetchTours() {
      try {
        setIsLoading(true);
        const data = await fetchAllTours();
        console.log(data);
        setTours(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTours();
    setInProp(true); // Trigger the enter transition
  }, []);

  return (
    <>
      <Helmet>
        <title>Tour Packages</title>
      </Helmet>
      <Breadcrumb pageName="Tours" />
      <Section py="0">
        <Container py="40px">
          <div className={styles.Title}>
            {isLoading ? <>Loading...</> : <FilterBox />}
          </div>
          <div className="col-12 row p-0">
            {tours.map((tour) => (
              <div className="col-12 col-lg-4 p-0" key={tour.id}>
                <TourCard
                  url={tour.url}
                  name={tour.name}
                  image={tour.image}
                  duration={tour.duration}
                  location={`${tour.location.city}, ${tour.location.country}`}
                  price={tour.price.adults}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function FilterBox() {
  return (
    <div className={styles.filterBox}>
      <p className={styles.filterTitle}>
        Price
        <FaChevronDown className={styles.chevronIcon} />
      </p>
      <p className={styles.filterTitle}>
        Location
        <FaChevronDown className={styles.chevronIcon} />
      </p>
      <p className={styles.filterTitle}>
        Duration
        <FaChevronDown className={styles.chevronIcon} />
      </p>
    </div>
  );
}
