import React from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "../context/productcontext";
const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "FarmArt: Cultivating Excellence in Farming",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About; 
