import React from "react";
import Title from "../components/Title";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);

          const inputs = document.querySelectorAll(
            "#name, #email, #phone, #message, #subject"
          );

          inputs.forEach((input) => {
            input.value = "";
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <>
      <div className="slider-banner">
        <Hero hero="roomsHero">
          <Banner title="Contact Us"></Banner>
        </Hero>
      </div>
      <section className="services contact">
        <Title title="Get in touch with Us" />
        <div className="services-center">
          <article className="service service">
            <span>
              <FaPhoneAlt />
            </span>
            <h6>Call</h6>
            <p>+91 8104830632</p>
          </article>
          <article className="service service">
            <span>
              <FaRegEnvelope />
            </span>
            <h6>Mail</h6>
            <p>anandshukla.web@gmail.com</p>
          </article>
        </div>
      </section>

      <div className="form-contact">
        <div className="form-container">
          <form className="my-form" id="my-form" onSubmit={sendEmail}>
            <div className="container">
              <ul>
                <li>
                  <div className="grid grid-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className="grid grid-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    id="message"
                    name="message"
                  ></textarea>
                </li>
                <li>
                  <div className="grid grid-3">
                    <button className="btn-grid" type="submit">
                      <span className="front">SUBMIT</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>

      {/* <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </>
  );
};

export default Contact;
