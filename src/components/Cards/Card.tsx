import React, { FC } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

type Props = {
  source: string;
  name: string;
  description: string;
  github: string;
  link: string;
  techs: string[];
};

const Card: FC<Props> = ({
  source,
  name,
  description,
  github,
  link,
  techs,
}) => {
  return (
    <div className="mx-auto mb-4 px-6 bg-dark">
      <div className="rounded overflow-hidden border">
        <img className="w-100" src={source} alt="todo project" />
        <div className="px-2">
          <div className="font-bold fs-4 text-white px-2 text-start my-2 ">
            {name}
          </div>
          <p className="text-white font-light fs-6 text-start px-2">
            {description}
          </p>
        </div>
        <div className="px-3 align-items-center d-flex">
          <div className="d-flex col-6 justify-content-around mr-1">
            <a
              href={github}
              className="btn btn-dark rounded d-flex mr-2 py-2 px-3 border text-white mb-3"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="fs-4" />
            </a>
            <a
              href={link}
              className="btn btn-dark rounded d-flex mr-2 py-2 px-3 border text-white mb-3"
              target="_blank"
              rel="noreferrer"
            >
              <HiExternalLink className="fs-4" />
            </a>
          </div>
          <div className="d-flex col-6 justify-content-around">
            <p className="fs-7 rounded d-flex mr-2 py-2 px-1 text-white border-none techs">
              #{techs[0]}
            </p>
            <p className="fs-7 rounded d-flex mr-2 py-2 px-1 text-white border-none techs">
              #{techs[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
