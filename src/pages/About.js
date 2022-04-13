import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const About = () => {
  return (
    <>
      <div className="slider-banner">
        <Hero hero="roomsHero">
          <Banner title="About Us"></Banner>
        </Hero>
      </div>
      <section className="about">
        <Title title="What is Lorem Ipsum? " />
        <div className="about-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </section>
    </>
  );
};

export default About;
