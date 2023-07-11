import React from "react";
import Contact from "../components/Contact";
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
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="mx-auto col-10 col-sm-9 col-lg-6 col-xl-5 px-2">
        <div className="mb-5 text-white">
          <div className="p-6 pb-5">
            <h1 className="p-4 pb-5 text-white fw-bold fs-4">Skills</h1>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Languages</h1>
            <div className="d-flex justify-content-start flex-wrap">
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiHtml5 className="fs-1" />
                <p className="fw-bold mt-2">HTML</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiCss3 className="fs-1" />
                <p className="fw-bold mt-2">CSS</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiPython className="fs-1" />
                <p className="fw-bold mt-2">Python</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiJavascript className="fs-1" />
                <p className="fw-bold mt-2">JavaScript</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiPhp className="fs-1" />
                <p className="fw-bold mt-2">PHP</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiTypescript className="fs-1" />
                <p className="fw-bold mt-2">TypeScript</p>
              </div>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Libraries</h1>
            <div className="d-flex justify-content-start flex-wrap">
              <div className="mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiReact className="fs-1" />
                <p className="fw-bold mt-2">React.js</p>
              </div>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Frameworks</h1>
            <div className="d-flex justify-content-start flex-wrap">
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiNextdotjs className="fs-1" />
                <p className="fw-bold mt-2">Next.js</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiBootstrap className="fs-1" />
                <p className="fw-bold mt-2">Bootstrap</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiTailwindcss className="fs-1" />
                <p className="fw-bold mt-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="pb-3 fs-5 text-start text-white">Other tools</h1>
            <div className="d-flex justify-content-start flex-wrap">
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiVisualstudiocode className="fs-1" />
                <p className="fw-bold mt-2">Visual Studio Code</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiGit className="fs-1" />
                <p className="fw-bold mt-2">Git</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiWebpack className="fs-1" />
                <p className="fw-bold mt-2">Webpack</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiSass className="fs-1" />
                <p className="fw-bold mt-2">SASS</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiGraphql className="fs-1" />
                <p className="fw-bold mt-2">GraphQL</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiMysql className="fs-1" />
                <p className="fw-bold mt-2">MySQL</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiPostman className="fs-1" />
                <p className="fw-bold mt-2">Postman</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiNodedotjs className="fs-1" />
                <p className="fw-bold mt-2">Node.js</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiMaterialui className="fs-1" />
                <p className="fw-bold mt-2">Material-UI</p>
              </div>
              <div className="flex-fill mx-4 my-4 col-2 d-flex flex-column justify-content-center align-items-center">
                <SiStyledcomponents className="fs-1" />
                <p className="fw-bold mt-2">Styled Components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Skills;
