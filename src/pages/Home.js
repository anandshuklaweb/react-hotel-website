import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import About from "../components/About";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <div className="slider-banner">
        <Hero hero="defaultHero">
          <Banner
            title="Your world is expanding"
            subtitle="Book the best Serviced Apartments In India "
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
      </div>
      <About />
      <Services />
      <FeaturedRooms />
      <Newsletter />
    </>
  );
};

export default Home;
