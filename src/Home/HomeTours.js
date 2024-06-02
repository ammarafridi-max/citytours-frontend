import TourCard from "../Components/TourCard/TourCard";
import Container from "../Components/Container/Container";
import Section from "../Components/Section/Section";
import SectionHeading from "../Components/Headings/SectionHeading";

function HomeTours() {
  return (
    <Section pt="75px">
      <Container className="row justify-content-between">
        <SectionHeading textAlign="center" mb="50px">
          Best-selling tours
        </SectionHeading>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Container>
    </Section>
  );
}

export default HomeTours;
