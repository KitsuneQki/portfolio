import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="text-white text-center flex justify-center items-end h-[300px] dark:bg-[#fcf9df]">
      <div className=" text-gray-300">
        <div className="py-4">
          <h1 className=" py-3 font-bold fs-5 text-center dark:text-[#141414]">
            Contact
          </h1>
          <div className="flex my-4 justify-center">
            <a
              className="flex justify-center p-3 items-center rounded-md text-decoration-none text-white"
              href="https://github.com/KitsuneQki"
            >
              <AiOutlineGithub />
              <p className="px-1">Github</p>
            </a>
            <a
              className="flex justify-center p-3 items-center rounded-md text-decoration-none text-white"
              href="https://www.linkedin.com/in/kevinzerpa/"
            >
              <AiOutlineLinkedin />
              <p className="px-1">LinkedIn</p>
            </a>
            <a
              className="flex justify-center p-3 items-center rounded-md text-decoration-none text-white"
              href="/"
            >
              <IoLogoDiscord />
              <p className="px-1">Qki #7022</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
