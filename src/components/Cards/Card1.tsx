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
        <div className="px-3 align-items-center justify-content-between d-flex">
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
          <div className="d-flex mx-4">
            <p className="fs-5 rounded d-flex mr-2 py-2 px-3 border-none techs">
              #ReactJs
            </p>
            <p className="fs-5 rounded d-flex mr-2 py-2 px-3 border-none techs">
              #Bootstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
