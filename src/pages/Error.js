import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="slider-banner">
      <Hero hero="defaultHero">
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
