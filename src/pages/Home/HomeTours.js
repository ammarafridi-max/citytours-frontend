import TourCard from "../../components/TourCard/TourCard";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionHeading from "../../components/Headings/SectionHeading";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { fetchAllTours } from "../../services/tourServices";
import { useEffect, useState } from "react";

function HomeTours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchTours() {
      try {
        const data = await fetchAllTours();
        setTours(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTours();
  }, []);

  return (
    <Section>
      <Container className="row justify-content-between">
        <SectionTitle
          textAlign="center"
          subtitle={"Discover Our Most Popular Travel Experiences"}
        >
          Best Selling Holiday Packages
        </SectionTitle>
        <div className="row p-0">
          {tours.map((tour, i) => {
            if (i < 3)
              return (
                <div className="col-12 col-lg-4 p-0">
                  <TourCard
                    url={tour.url}
                    image={tour.image}
                    name={tour.name}
                    duration={tour.duration}
                    location={`${tour.location.country}`}
                    price={tour.price.adults}
                  />
                </div>
              );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default HomeTours;
