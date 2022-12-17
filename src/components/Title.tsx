import React, { useState } from "react";
import Typewriter from "react-ts-typewriter";

const Hero = () => {
  const [cursor, setCursor] = useState(true);
  return (
    <div className="mx-auto">
      <div className="m-5">
        <div className="bg-dark p-3 col-lg-10 col-xl-10 col-xxl-9 mx-auto custom-border shadow-light">
          <div className="text-white">
            <Typewriter
              speed={100}
              text={"Hi, I'm Kevin Zerpa"}
              delay={100}
              cursor={cursor}
              onFinished={() => {
                setCursor(false);
              }}
            />
          </div>
          <div className="text-white">
            {!cursor ? (
              <Typewriter
                speed={100}
                text={"I'm a Frontend Developer based in Venezuela!"}
                cursor={true}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
