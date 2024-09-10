import Container from "../../../components/Container/Container";
import SectionHeading from "../../../components/Headings/SectionHeading";
import Section from "../../../components/Section/Section";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import davidImg from "./david.png";
import emilyImg from "./emily.png";

export default function HomeTestimonials() {
  return (
    <Section>
      <Container>
        <SectionTitle
          textAlign="center"
          subtitle="Hear What Our Happy Travelers Have to Say"
        >
          Testimonials
        </SectionTitle>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 " type="secondary">
            <TestimonialCard name="David Wilson" image={davidImg}>
              City Tours LLC made our trip unforgettable. The booking process
              was seamless, and the customer service was outstanding. Our guide
              was knowledgeable and made each destination fascinating. The
              itinerary was well-planned, and the accommodations were excellent.
              Highly recommended!
            </TestimonialCard>
          </div>
          <div className="col-12 col-lg-6 ">
            <TestimonialCard name="Emily Johnson" image={emilyImg}>
              I had an amazing experience with City Tours LLC. The tour was
              well-organized, and our guide was friendly and informative. We
              visited both popular attractions and hidden gems. Accommodations
              were comfortable and convenient. Highly recommend their services!
            </TestimonialCard>
          </div>
        </div>
      </Container>
    </Section>
  );
}
