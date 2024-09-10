import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import img from "./hero-img.png";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import PrimaryButtonOutline from "../../../components/Buttons/PrimaryButtonOutline";
import Input from "../../../components/FormElements/Input";
import Label from "../../../components/FormElements/Label";
import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div></div>
    </section>
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
