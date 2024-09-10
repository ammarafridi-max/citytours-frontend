import styles from "./Contact.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useState } from "react";
import { Helmet } from "react-helmet";

export function ContactPage() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    name,
    email,
    message,
  };

  function handleForm(e) {
    e.preventDefault();

    fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Breadcrumb pageName="Contact Us" />
      <Section mt="60px" mb="60px">
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <a
                href="tel:97165355055"
                className={styles.IconLink}
                target="_blank"
              >
                <div className={styles.IconBox}>
                  <div className={styles.IconBorder}>
                    <CallIcon className={styles.Icon} fontSize="medium" />
                  </div>
                  <p>Call us: +971 6 535 5055</p>
                </div>
              </a>

              <a
                href="mailto:info@citytours.ae"
                className={styles.IconLink}
                target="_blank"
              >
                <div className={styles.IconBox}>
                  <div className={styles.IconBorder}>
                    <EmailIcon className={styles.Icon} fontSize="medium" />
                  </div>
                  <p>Email us: info@citytours.ae</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/dir//City+Tours+LLC+Sarah+Tower+Muwaileh+-+Office+No.+1+-+Maleha+St+Sharjah/@25.2947888,55.4396427,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f5ee5fff76919:0x3bbe0c327f6b61b9!2m2!1d55.4396427!2d25.2947888?entry=ttu"
                className={styles.IconLink}
                target="_blank"
              >
                <div className={styles.IconBox}>
                  <div className={styles.IconBorder}>
                    <LocationOnIcon className={styles.Icon} fontSize="medium" />
                  </div>
                  <p>Visit us from Saturday through Thursday</p>
                </div>
              </a>

              <form className={styles.Form} method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className={styles.Input}
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className={styles.Input}
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className={styles.Textarea}
                      placeholder="Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <PrimaryButton onClick={handleForm}>Submit</PrimaryButton>
                  </div>
                  {feedback}
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57708.0186608765!2d55.42005184093874!3d25.31256303668112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ee5fff76919%3A0x3bbe0c327f6b61b9!2sCity%20Tours%20LLC!5e0!3m2!1sen!2sae!4v1710098289660!5m2!1sen!2sae"
                className={styles.GoogleMap}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ContactPage;
