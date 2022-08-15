import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const AndroidTeam = () => {
  return (
    <div className="container flex flex-col md:flex-row w-full h-5/6 justify-between items-center m-auto px-1 py-10">
      <div className="container basis-1/2 px-5 flex-row items-center md:flex transition ease-in-out  hover:-translate-y-1 hover:scale-110">
        <Zoom>
          <img src="/android-team.svg" width="80%" />
        </Zoom>
      </div>
      <Fade right>
        <div className="container flex flex-col md:basis-1/2 basis-1 px-5 items-left flex-none">
          <p className=" text-3xl md:text-6xl font-medium text-black  text-left">
            <span className="font-semibold text-green-600">
              Android Development Team
            </span>
          </p>
          <p className=" text-lg md:text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
            GDSC's Android Development team is engaged in developing mobile
            applications and projects while also conducting workshops for
            frameworks like Flutter.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AndroidTeam;
