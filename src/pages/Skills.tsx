import React from "react";
import Contact from "../components/Contact";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiTypescript,
  SiMaterialui,
  SiStyledcomponents,
  SiGit,
  SiPython,
  SiSass,
  SiNodedotjs,
  SiWebpack,
  SiVisualstudiocode,
  SiGraphql,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="mx-auto col-10 col-sm-9 col-lg-6 col-xl-5">
        <div className="mb-5 text-white">
          <div className="p-6 pb-5">
            <h1 className="p-4 pb-5 text-white fw-bold fs-4">Skills</h1>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Languages</h1>
            <div className="d-flex">
              <p className="pl-4 py-2 px-4">
                <IoLogoHtml5 className="fs-1" />
              </p>
              <p className="pl-4 py-2 px-4">
                <IoLogoCss3 className="fs-1" />
              </p>
              <p className="pl-4 py-2 px-4">
                <SiPython className="fs-1" />
              </p>
              <p className="pl-4 py-2 px-4">
                <DiJavascript1 className="fs-1" />
              </p>
              <p className="pl-4 py-2 px-4">
                <SiTypescript className="fs-1" />
              </p>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Frameworks</h1>
            <div className="d-flex">
              <p className="pl-4 py-2 px-4">
                <FaReact className="fs-1" />
              </p>
              <p className="pl-4 py-2 px-4">
                <SiBootstrap className="fs-1" />
              </p>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Other tools</h1>
            <div className="grid grid-cols-4 d-flex">
              <p className="pl-4 py-4 px-4">
                <SiVisualstudiocode className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiGit className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiWebpack className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiSass className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiGraphql className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiPostman className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiNodedotjs className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiMaterialui className="fs-1" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiStyledcomponents className="fs-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Skills;
