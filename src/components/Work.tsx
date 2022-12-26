import React from "react";

const Work = () => {
  return (
    <div className="text-start col-12 mx-auto">
      <div className="py-4 text-white">
        <div className="py-4">
          <h1 className="fs-4 fw-bold">Kevin Zerpa</h1>
          <h2 className="fs-5 text-muted">Front-End Developer</h2>
        </div>
        <div className="py-4">
          <h1 className="pb-2 fs-5 fw-bold">Work</h1>
          <p className="fs-6 justify">
            Hi, I'm Kevin Zerpa a front-end developer based in Venezuela with a
            great passion for designing and building websites. I've worked with
            different technologies such as Javascript, Typescript, ReactJS. I'm
            currently studying Fullstack Development at Henry and learning new
            technologies every day. At the moment looking for a new experience
            to grow even more.
          </p>
        </div>
        <div className="btn d-flex justify-content-center p-2">
          <a
            href="https://github.com/KitsuneQki/portfolio"
            className="mb-8 btn btn-lg btn-outline-dark border-white text-white fs-6 px-4"
          >
            My portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
