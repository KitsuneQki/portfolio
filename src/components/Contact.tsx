import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="text-white text-center d-flex justify-content-center">
      <div className="text-white">
        <div className="py-4">
          <h1 className="p-4 pb-8 text-white font-bold fs-4">Contact</h1>

          <div className="d-flex">
            <a
              className="d-flex text-decoration-none mr-2 py-2 px-3 mx-3 custom-border techs align-items-center text-white mb-3"
              href="https://github.com/KitsuneQki"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="fs-4" />
              <p className="my-2 px-1">Github</p>
            </a>
            <a
              className="d-flex text-decoration-none mr-2 py-2 px-3 mx-3 custom-border techs align-items-center text-white mb-3"
              href="https://www.linkedin.com/in/kevinzerpa/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="fs-4" />
              <p className="my-2 px-1">LinkedIn</p>
            </a>
            <a
              className="d-flex text-decoration-none mr-2 py-2 px-3 mx-3 custom-border techs align-items-center text-white mb-3"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoDiscord className="fs-4" />
              <p className="my-2 px-1">Qki #7022</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
