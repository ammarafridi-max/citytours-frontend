import { useState } from "react";
import axios from "axios";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName: fName,
      lastName: lName,
      dateOfBirth: dob,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log("Submit btn clicked");

    axios
      .post("http://localhost:3001/user/sign-up", formData)
      .then((response) => {
        console.log(response);
        setAlertText("Signed up successfully");
        setTimeout(() => {
          setAlertText("");
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(`Error sending data to backend: ${error} `);
      });
  }

  return (
    <div className="col-lg-5 mx-auto my-5">
      <h1 className="text-center mb-5">Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg">
            <label htmlFor="fname" className="w-100 bold">
              <span className="required">*</span> First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="w-100 input-3"
              onChange={(e) => {
                setFName(e.target.value);
              }}
              autoFocus
              required
            />
          </div>
          <div className="col-lg">
            <label htmlFor="lname" className="w-100 bold">
              <span className="required">*</span> Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="w-100 input-3"
              onChange={(e) => {
                setLName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg">
            <label htmlFor="dob" className="w-100 bold">
              <span className="required">*</span> Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="w-100 input-3"
              required
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </div>
          <div className="col-lg">
            <label htmlFor="email" className="w-100 bold">
              <span className="required">*</span> Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-100 input-3"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg">
            <label htmlFor="password" className="bold w-100">
              <span className="required">*</span> Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-100 input-3"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="col-lg">
            <label htmlFor="re-password" className="bold w-100">
              <span className="required">*</span> Confirm Password
            </label>
            <input
              type="password"
              name="re-password"
              id="re-password"
              className="w-100 input-3"
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>

        {password !== confirmPassword && (
          <p className="text-center my-4 f-12 text-danger">
            Passwords do not match
          </p>
        )}

        {alertText && (
          <div className="alert alert-success" role="alert">
            {alertText}
          </div>
        )}

        <div className="col-lg-6 mx-auto mt-4">
          {!fName.length ||
          !lName.length ||
          !dob.length ||
          !email.length ||
          !password.length ||
          password !== confirmPassword ? (
            <button className="btn btn-primary w-100" type="submit" disabled>
              Sign Up
            </button>
          ) : (
            <button className="btn btn-primary w-100" type="submit">
              Sign Up
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
