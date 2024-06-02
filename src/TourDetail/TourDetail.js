import styles from "./TourDetail.module.css";
// Components
import Section from "../Components/Section/Section";
import PageHeading from "../Components/Headings/PageHeading";
import SectionHeading from "../Components/Headings/SectionHeading";
import Container from "../Components/Container/Container";
import Counter from "../Components/FormElements/Counter";
import Label from "../Components/FormElements/Label";
import Input from "../Components/FormElements/Input";
import img from "./TourImage.png";
// Icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TourIcon from "@mui/icons-material/Tour";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import FAQCard from "../Components/FAQCard/FAQCard";
import { useState } from "react";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const tourData = {
  name: "Explore Switzerland",
  url: "explore-switzerland",
  duration: {
    days: 5,
    nights: 6,
  },
  type: "Fixed Departure",
  price: {
    single: 2400,
    double: 2200,
    triple: 2100,
  },
  location: {
    city: "Zurich",
    country: "Switzerland",
  },
  age: {
    adults: "18 - 60",
    children: "2 - 17",
    infants: "0 - 1",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  inclusions: [
    "Visa",
    "Return flight booking",
    "4 star hotel booking",
    "Airport transfers",
  ],
  highlights: [],
  exclusions: ["Meals", "Airport transfers", "Other services not mentioned"],
  faqs: [
    {
      question: "What is a tour?",
      answer: "A tour is when you explore another country.",
    },
  ],
};

export default function TourDetail() {
  return (
    <>
      {/* Image section */}
      <div className={styles.tourImage}>
        <img src={img} className={styles.Img} />
      </div>
      <Section className={styles.Section}>
        <Container className={styles.tourContent}>
          {/* Left side content */}
          <div className={styles.leftSideContent}>
            <div className={styles.breadcrumb}>
              <Link to="/">
                <span>Home</span>
              </Link>{" "}
              <KeyboardArrowRightIcon />
              <Link to="/tours">
                <span>Tours</span>
              </Link>{" "}
              <KeyboardArrowRightIcon /> <span>Explore Switzerland</span>
            </div>

            <PageHeading>Explore Switzerland</PageHeading>
            <div
              className={`${styles.IconsSection} row justify-content-between`}
            >
              <div className={styles.IconBox}>
                <AccessTimeFilledIcon className={styles.Icon} />
                <p className="bold">Duration</p>
                <p>5 Days / 6 Nights</p>
              </div>
              <div className={styles.IconBox}>
                <LocationOnIcon className={styles.Icon} />
                <p className="bold">Location</p>
                <p>Zurich, Switzerland</p>
              </div>
              <div className={styles.IconBox}>
                <CalendarMonthIcon className={styles.Icon} />
                <p className="bold">Departure</p>
                <p>Multiple dates</p>
              </div>
              <div className={styles.IconBox}>
                <TourIcon className={styles.Icon} />
                <p className="bold">Tour Type</p>
                <p>Adventure</p>
              </div>
            </div>

            <h2 className={styles.tourSectionHeading}>Description</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2 className={styles.tourSectionHeading}>Inclusions/Exclusions</h2>

            <div className="row">
              <div className="col-12 col-lg-6">
                {tourData.inclusions.map((inc, index) => {
                  return (
                    <p key={index} className={styles.Check}>
                      <FaCheckCircle className={styles.CheckIcon} />
                      {inc}
                    </p>
                  );
                })}
              </div>
              <div className="col-12 col-lg-6">
                {tourData.exclusions.map((exc, index) => {
                  return (
                    <p key={index} className={styles.Cancel}>
                      <FaTimesCircle className={styles.CancelIcon} />
                      {exc}
                    </p>
                  );
                })}
              </div>
            </div>

            <h2 className={styles.tourSectionHeading}>Tour Highlights</h2>

            <h2 className={styles.tourSectionHeading}>FAQs</h2>

            <div className={styles.FAQSection}>
              <FAQCard />
              <FAQCard />
              <FAQCard />
            </div>

            <h2 className={styles.tourSectionHeading}>Important Information</h2>
          </div>

          {/* Right side content */}
          <div className={styles.rightSideContent}>
            <Form
              singlePrice={tourData.price.single}
              doublePrice={tourData.price.double}
              triplePrice={tourData.price.triple}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

function Form(props) {
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  var adultTotal = 0;

  if (adultCount === 1) {
    adultTotal = adultCount * props.singlePrice;
  } else if (adultCount === 2) {
    adultTotal = adultCount * props.doublePrice;
  } else if (adultCount === 3) {
    adultTotal = adultCount * props.triplePrice;
  } else {
    adultTotal = adultCount * props.triplePrice;
  }

  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.Form}>
      {/* Count */}
      <div className="row justify-content-between align-items-center m-0">
        <p className={styles.Age}>
          Adults<span>(Age 18 - 60)</span>
        </p>
        <Counter
          onAdd={() => {
            if (adultCount < 9) {
              setAdultCount((count) => count + 1);
            }
          }}
          onSubtract={() => {
            if (adultCount > 1) {
              setAdultCount((count) => count - 1);
            }
          }}
        >
          {adultCount}
        </Counter>
      </div>

      <div className="row justify-content-between align-items-center m-0">
        <p className={styles.Age}>
          Children<span>(Age 2 - 17)</span>
        </p>
        <Counter
          onAdd={() => {
            if (childrenCount < 9) {
              setChildrenCount((count) => count + 1);
            }
          }}
          onSubtract={() => {
            if (childrenCount > 0) {
              setChildrenCount((count) => count - 1);
            }
          }}
        >
          {childrenCount}
        </Counter>
      </div>

      <div className="row justify-content-between align-items-center m-0 mb-3">
        <p className={styles.Age}>
          Infants<span>(Age 0 - 1)</span>
        </p>
        <Counter
          onAdd={() => {
            if (infantCount < 2) {
              setInfantCount((count) => count + 1);
            }
          }}
          onSubtract={() => {
            if (infantCount > 0) {
              setInfantCount((count) => count - 1);
            }
          }}
        >
          {infantCount}
        </Counter>
      </div>

      <div>Total: {adultTotal}</div>

      {/* Input */}
      <div className="mb-3">
        <Label>Name</Label>
        <Input type="text" value={name} />
      </div>

      <div className="mb-3">
        <Label>Email</Label>
        <Input type="text" value={email} />
      </div>

      <div className="mb-3">
        <Label>Phone Number</Label>
        <Input type="text" />
      </div>

      <div className="mb-3">
        <Label>Date</Label>
        <Input type="date" />
      </div>

      {/* Button */}
      <div className="text-center">
        <PrimaryButton type="submit" onClick={handleForm}>
          Send Inquiry
        </PrimaryButton>
      </div>
    </form>
  );
}
