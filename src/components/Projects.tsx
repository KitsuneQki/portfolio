import React from "react";
import Card1 from "./Cards/Card1";

const Carrousel = () => {
  return (
    <div className="mx-auto text-white">
      <h1 className="items-center justify-center flex p-4 pb-8 text-white font-bold fs-5 dark:text-[#141414]">
        Latest Project
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="grid items-center grid-cols">
          <Card1 />
        </div>
      </div>
      <div className="d-flex justify-content-center py-4">
        <a
          href="/works"
          className="mb-8 btn btn-lg text-white fs-5 border-white"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Carrousel;
