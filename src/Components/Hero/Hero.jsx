import React from "react";

const Hero = ({ heroImage }) => {
  return (
    <div className="relative">
      <img
        src={heroImage}
        alt="Hero"
        className="relative object-cover w-full"
      />
      <h1 className="absolute z-10 text-6xl font-bold tracking-normal text-white bottom-20 font-inter left-24">
        Discover Extraordinary <br />
        Comfort in Hotels
      </h1>
    </div>
  );
};

export default Hero;
