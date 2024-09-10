import styles from "./TourDetail.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Components
import Section from "../../components/Section/Section";
import PageHeading from "../../components/Headings/PageHeading";
import Container from "../../components/Container/Container";
import Counter from "../../components/FormElements/Counter";
import Label from "../../components/FormElements/Label";
import Input from "../../components/FormElements/Input";
// Icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TourIcon from "@mui/icons-material/Tour";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import FAQCard from "../../components/FAQCard/FAQCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { Helmet } from "react-helmet";

export default function TourDetail() {
  const [tour, setTour] = useState({
    name: "",
    url: "",
    image: "",
    description: "",
    duration: "",
    location: {
      city: "",
      country: "",
    },
    age: {
      adults: "18 - 60",
      children: "2 - 17",
      infant: "0 - 2",
    },
    price: {
      adults: 0,
      children: 0,
      infants: 0,
    },
    inclusions: [],
    exclusions: [],
    additionalInformation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { url } = useParams();

  useEffect(() => {
    async function fetchTour() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/tours/${url}`
        );
        const data = await res.json();
        console.log(data);
        setTour(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTour();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Helmet>
            <title>{`${tour.name} - Tours - City Tours UAE`}</title>
          </Helmet>

          {/* Image section */}
          <div className={styles.tourImage}>
            <img src={tour.image} className={styles.Img} />
          </div>

          <Section py="50px">
            <Container className={styles.tourContent}>
              <main className={styles.leftSideContent}>
                {/* <Breadcrumb tour={tour} /> */}

                <PageHeading className={styles.Title}>{tour.name}</PageHeading>

                <div
                  className={styles.Description}
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                ></div>

                <h2 className={styles.tourSectionHeading}>
                  Inclusions/Exclusions
                </h2>

                <div className="row">
                  <div className="col-12 col-lg-6">
                    {tour.inclusions.map((inc, index) => {
                      return (
                        <ListItem
                          icon={<FaCheckCircle className={styles.CheckIcon} />}
                          text={inc}
                        />
                      );
                    })}
                  </div>

                  <div className="col-12 col-lg-6">
                    {tour.exclusions.map((exc, index) => {
                      return (
                        <ListItem
                          icon={<FaTimesCircle className={styles.CancelIcon} />}
                          text={exc}
                        />
                      );
                    })}
                  </div>
                </div>

                <h2 className={styles.tourSectionHeading}>
                  Additional Information
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: tour.additionalInformation,
                  }}
                ></div>
              </main>

              <div className={styles.rightSideContent}>
                <Form
                  adultsAge={tour.age.adults}
                  childrenAge={tour.age.children}
                  infantsAge={tour.age.infants}
                />
              </div>
            </Container>
          </Section>
        </>
      )}
    </>
  );
}

function Form({ adultsAge, childrenAge, infantsAge }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.Form}>
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

function IconBox({ tour }) {
  return (
    <div className={`${styles.IconsSection} row justify-content-between`}>
      <div className={styles.IconBox}>
        <AccessTimeFilledIcon className={styles.Icon} />
        <p className="medium-bold">Duration</p>
        <p>{tour.duration}</p>
      </div>
      <div className={styles.IconBox}>
        <LocationOnIcon className={styles.Icon} />
        <p className="medium-bold">Location</p>
        <p>{tour.location.country}</p>
      </div>
      <div className={styles.IconBox}>
        <CalendarMonthIcon className={styles.Icon} />
        <p className="medium-bold">Departure</p>
        <p>Multiple dates</p>
      </div>
      <div className={styles.IconBox}>
        <TourIcon className={styles.Icon} />
        <p className="medium-bold">Tour Type</p>
        <p>Adventure</p>
      </div>
    </div>
  );
}

function Breadcrumb({ tour }) {
  return (
    <div className={styles.breadcrumb}>
      <Link to="/">
        <span>Home</span>
      </Link>{" "}
      <KeyboardArrowRightIcon />
      <Link to="/tours">
        <span>Tours</span>
      </Link>{" "}
      <KeyboardArrowRightIcon /> <span>{tour.name}</span>
    </div>
  );
}

function ListItem({ icon, text }) {
  return (
    <div className="row mb-2 px-0">
      <span className="col-1 px-0">{icon}</span>
      <span className="col-10 mx-0">{text}</span>
    </div>
  );
}
