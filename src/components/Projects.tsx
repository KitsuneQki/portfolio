import React from "react";
import Card1 from "./Cards/Card1";

const Carrousel = () => {
  return (
    <div className="mx-auto col-9 text-white mb-5">
      <h1 className="p-4 pb-8 text-white font-bold fs-4">Latest Project</h1>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="grid items-center grid-cols">
          <Card1 />
        </div>
      </div>
      <div className="d-flex justify-content-center py-4">
        <a
          href="/works"
          className="mb-8 btn btn-lg btn-outline-dark border-white text-white fs-6 px-4"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Carrousel;
