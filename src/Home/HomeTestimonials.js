import Container from "../Components/Container/Container";
import SectionHeading from "../Components/Headings/SectionHeading";
import Section from "../Components/Section/Section";
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard";

export default function HomeTestimonials() {
  return (
    <Section pb="75px">
      <Container>
        <SectionHeading textAlign="center" mb="75px">
          Testimonials
        </SectionHeading>
        <div className="row justify-content-between">
          <TestimonialCard name="Sarah Johnson" profession="Teacher">
            I had an amazing experience with City Tours LLC. From exploring the
            vibrant streets of Istanbul to relaxing on the beaches of Dubai,
            every moment was magical. The team at City Tours LLC took care of
            every detail, ensuring a stress-free and memorable holiday. I highly
            recommend their services to anyone looking for an unforgettable
            travel experience.
          </TestimonialCard>
          <TestimonialCard name="Sarah Johnson" profession="Teacher">
            I had an amazing experience with City Tours LLC. From exploring the
            vibrant streets of Istanbul to relaxing on the beaches of Dubai,
            every moment was magical. The team at City Tours LLC took care of
            every detail, ensuring a stress-free and memorable holiday. I highly
            recommend their services to anyone looking for an unforgettable
            travel experience.
          </TestimonialCard>
          <TestimonialCard name="David Patel" profession="Business Owner">
            City Tours LLC made my trip to Azerbaijan and Malaysia truly
            unforgettable. Their attention to detail and personalized service
            exceeded my expectations. From arranging seamless visa services to
            organizing unforgettable city tours, every aspect of my trip was
            meticulously planned. I can't wait to book my next adventure with
            City Tours LLC!
          </TestimonialCard>
          <TestimonialCard name="Maria Garcia" profession="Nurse">
            I can't thank City Tours LLC enough for making my dream vacation to
            the UK a reality. Their expertise in visa services made the process
            smooth and hassle-free. The holiday packages they offered were
            diverse and catered to every interest. I had the most amazing time
            exploring new cultures and creating lifelong memories.
          </TestimonialCard>
        </div>
      </Container>
    </Section>
  );
}
