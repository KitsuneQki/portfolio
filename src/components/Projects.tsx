import React from "react";
import Card from "./Cards/Card";
import todoapp from "../assets/images/todoapp.png";
import { Link } from "react-router-dom";

const Carrousel = () => {
  return (
    <div className="mx-auto col-12 text-white mb-5">
      <h1 className="p-4 pb-8 text-white font-bold fs-4">Latest Project</h1>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="grid items-center grid-cols">
          <Card
            source={todoapp}
            name="To-Do app"
            description="Frontend practice project."
            github="https://github.com/KitsuneQki/my-app"
            link="https://my-app-sigma-puce.vercel.app/"
            techs={["React", "Bootstrap"]}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center py-4">
        <Link
          to="/works"
          className="mb-5 btn btn-lg btn-outline-dark border-white text-white fs-6 px-4"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default Carrousel;
