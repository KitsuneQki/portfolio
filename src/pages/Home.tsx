import React from "react";
import Title from "../components/Title";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Homepage = () => {
  return (
    <div className="mx-auto col-12 col-sm-9 col-lg-6 col-xl-5 px-2">
      <Title />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
