import React from "react";
import Contact from "../components/Contact";
import Card1 from "../components/Cards/Card1";

const Works = () => {
  return (
    <div className="mx-auto col-11 col-sm-10 col-lg-8 col-xl-8">
      <div className="min-vh-100">
        <div className="py-8 text-2xl font-bold">
          <h1 className="p-4 pb-8 text-white font-bold fs-4">Works</h1>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <Card1 />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card1 />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card1 />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card1 />
          </div>
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Works;
