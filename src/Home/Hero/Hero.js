import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import img from "./hero-img.png";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import PrimaryButtonOutline from "../../Components/Buttons/PrimaryButtonOutline";
import Input from "../../Components/FormElements/Input";
import Label from "../../Components/FormElements/Label";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Section className={styles.Hero}>
      <Container
        className={`${styles.Container} row align-items-center p-0 m-0`}
      >
        <div className="col-lg-8 m-0 p-0">
          <h1 className={styles.Heading}>
            Choose the best, <br />
            experience the best
          </h1>
          <p className={styles.Subheading}>
            Your gateway to unforgettable adventures and experiences
          </p>
          <Form />
        </div>
        <div className="col-lg-4 m-0 p-0">
          <img src={img} className={styles.Img} />
        </div>
      </Container>
    </Section>
  );
}

function Form() {
  return (
    <form className={styles.Form}>
      <div className="col-lg-3 px-3 py-3">
        <label className={styles.Label}>Country</label>
        <input
          type="text"
          className={styles.Input}
          placeholder="Select country..."
        />
      </div>
      <div className="col-lg-3 px-3 py-3">
        <label className={styles.Label}>Date</label>
        <input type="text" className={styles.Input} placeholder="Select Date" />
      </div>
      <div className="col-lg-4 px-3 py-3">
        <label className={styles.Label}>Price Range</label>
        <input
          type="text"
          className={styles.Input}
          value="AED 800 - AED 1,200"
        />
      </div>
      <div className="col-12 col-lg-2">
        <button className={styles.Btn}>Go!</button>
      </div>
    </form>
  );
}

{
  /* <div className="col-10 mx-auto row justify-content-center">
        <PrimaryButton>Explore Now</PrimaryButton>
        <PrimaryButtonOutline>Contact Us</PrimaryButtonOutline>
      </div> */
}
{
  /* <form className={styles.Form}>
          <div className={styles.Col1}>
            <Label>Search...</Label>
            <Input type="text" />
          </div>
          <div className={styles.Col2}>
            <Label>City</Label>
            <Input type="text" />
          </div>
          <div className={styles.Col3}>
            <button className={styles.Button}>Submit</button>
          </div>
        </form> */
}
