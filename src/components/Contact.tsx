import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mx-auto col-10 col-sm-10 col-lg-8 col-xl-8">
      <div className="text-white">
        <div className="py-4">
          <h1 className="py-4 pb-5 text-white font-bold fs-4">Contact</h1>

          <div className="row d-flex justify-content-center">
            <a
              className="d-flex text-decoration-none justify-content-center custom-border techs align-items-center text-white mb-3 col-4"
              href="https://github.com/KitsuneQki"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="fs-4" />
              <p className="my-2 mx-1">Github</p>
            </a>
            <a
              className="d-flex text-decoration-none justify-content-center custom-border techs align-items-center text-white mb-3 col-4"
              href="https://www.linkedin.com/in/kevinzerpa/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="fs-4" />
              <p className="my-2 mx-1">LinkedIn</p>
            </a>
            <a
              className="d-flex text-decoration-none justify-content-center custom-border techs align-items-center text-white mb-3 col-4"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoDiscord className="fs-4" />
              <p className="my-2 mx-1">Qki #7022</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
