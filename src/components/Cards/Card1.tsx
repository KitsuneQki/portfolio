import React from "react";
import todoapp from "../../assets/images/todoapp.png";
import { AiOutlineGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

const Card = () => {
  return (
    <div className="mx-auto mb-4 px-6 bg-dark">
      <div className="rounded overflow-hidden border">
        <img className="w-100" src={todoapp} alt="" />
        <div className="px-2">
          <div className="font-bold fs-4 text-white px-2 text-start my-2 ">
            To-Do app
          </div>
          <p className="text-white font-light fs-6 text-start px-2">
            Frontend practice project.
          </p>
        </div>
        <div className="px-3 align-items-center d-flex">
          <div className="d-flex col-6 justify-content-around mr-1">
            <a
              href="https://github.com/KitsuneQki/my-app"
              className="btn btn-dark rounded d-flex mr-2 py-2 px-3 border text-white mb-3"
            >
              <AiOutlineGithub className="fs-4" />
            </a>
            <a
              href="https://my-app-sigma-puce.vercel.app/"
              className="btn btn-dark rounded d-flex mr-2 py-2 px-3 border text-white mb-3"
            >
              <HiExternalLink className="fs-4" />
            </a>
          </div>
          <div className="d-flex col-6 justify-content-around">
            <p className="fs-7 rounded d-flex mr-2 py-2 px-1 text-white border-none techs">
              #ReactJs
            </p>
            <p className="fs-7 rounded d-flex mr-2 py-2 px-1 text-white border-none techs">
              #Bootstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
