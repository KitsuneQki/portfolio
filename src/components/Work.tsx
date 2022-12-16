import React from "react";

const Work = () => {
  return (
    <div className="text-start w-100">
      <div className="p-4 text-white">
        <div className="p-4">
          <h1 className="fs-5 fw-bold">Kevin Zerpa</h1>
          <h2 className="fs-5 text-muted">Front-End Developer</h2>
        </div>
        <div className="p-4">
          <h1 className="pb-2 fs-5 fw-bold">Work</h1>
          <p className="fs-6">
            Kevin Zerpa is a front-end developer based in Venezuela with a great
            passion for designing and building websites. He has worked with
            different technologies such as Javascript, Typescript, ReactJS. He
            is currently studying Fullstack Development at Henry and learning
            new technologies every day. At the moment he is looking for a new
            experience to grow even more.
          </p>
        </div>
        <div className="d-flex justify-content-center py-4">
          <a
            href="https://github.com/KitsuneQki"
            className="btn btn-lg text-white fs-5 border-white"
          >
            My portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
