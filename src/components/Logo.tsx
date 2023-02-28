import React, { Fragment } from "react";
import logo from "../assets/images/logo.jpg";
import "../index.css";

const Logo = () => {
  return (
    <>
      <div className="mx-auto col-12 col-sm-9 col-lg-6 col-xl-5 px-2">
        <div className="py-1 fs-5">
          <div className="d-flex justify-content-center align-items-center py-2">
            <img className="w-50" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
