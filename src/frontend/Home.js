import React from "react";
import HeroSection from "./HeroSection";
import Services from "./services";
import Trusted from "./trusted";

const Home = () => {
  const data = {
    name: "FarMart",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;