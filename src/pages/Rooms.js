import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <div className="slider-banner">
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          </Banner>
        </Hero>
      </div>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
