import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";
import SectionHeading from "../../../components/Headings/SectionHeading";
import DestinationCard from "../../../components/DestinationCard/DestinationCard";
import UAE from "./dxb.jpg";
import Azerbaijan from "./az.jpg";
import Malaysia from "./ma.jpg";
import Singapore from "./si.jpg";
import Thailand from "./th.jpg";
import Turkey from "./tu.jpg";

function HomeDestinations() {
  return (
    <Section pt="75px">
      <Container>
        <SectionHeading textAlign="center" mb="50px">
          Trending Destinations
        </SectionHeading>
        <div className="row justify-content-between">
          <DestinationCard
            name="United Arab Emirates"
            href="united-arab-emirates"
            img={UAE}
          />
          <DestinationCard name="Azerbaijan" img={Azerbaijan} />
          <DestinationCard name="Turkey" img={Turkey} />
          <DestinationCard name="Thailand" img={Thailand} />
        </div>
      </Container>
    </Section>
  );
}

export default HomeDestinations;
