import React, { useState, useEffect, useRef } from "react";
import "./Auth.css";
import img1 from "../../assets/auth/1.jpg";
import img2 from "../../assets/auth/2.jpg";
import img3 from "../../assets/auth/3.jpg";
import img4 from "../../assets/auth/4.jpg";
import en from "../../assets/auth/en.svg";
import { Formik, Form } from "formik";
import logo from "../../assets/landingPage/logo.png";
import FormikControl from "../../components/forms/FormikControl";
import { NavLink, Link, useNavigate, useLocation } from "react-router";

const images = [img2, img3, img4];
const colors = ["#00C49F", "#00C49F", "#00C49F"];

const ForgotPassword = () => {
  const delay = 2500;
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log("Form data", values);
  };

  const authText = () => {
    if (index === 0) {
      return "10 technical indicators";
    } else if (index === 1) {
      return "Be alerted !";
    } else if (index === 2) {
      return "All news at the same place";
    }
  };

  return (
    <div className="auth__container">
      <div className="auth__content">
        <div className="auth__form__div">
          <div className="auth__form">
            <div className="auth__form__content">
              <img src={logo} alt="" />
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formik) => {
                  return (
                    <Form className="formik__form">
                      <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Your e-mail address"
                      />

                      <div className="auth__action">
                        <div className="signup__div">
                          <a onClick={() => navigate("/signin")}>
                            Back to login
                          </a>
                          <button
                            className="signup__button1"
                            type="submit"
                            disabled={!formik.isValid}
                          >
                            <span>Next</span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="auth__img">
            <div className="slideshow3">
              <div className="slideshowDots3">
                <div className="authImg__text">{authText()}</div>
                <div className="auth__dots">
                  {colors.map((_, idx) => (
                    <>
                      <div
                        key={idx}
                        className={`authslideshowDot${
                          index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                      ></div>
                    </>
                  ))}
                </div>
              </div>
              <div
                className="slideshowSlider3"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {images.map((image, index) => (
                  <>
                    <div className="slide3" key={index}>
                      <img src={image} alt="Image" className="authImg" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="auth__info">
          <div className="auth__country">
            <img src={en} alt="" />
            <p>English</p>
          </div>
          <div className="auth__terms">
            <p>TERMS OF SERVICE</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
