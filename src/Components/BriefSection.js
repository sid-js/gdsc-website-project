import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const BriefSection = () => {
  return (
    <div className="container flex flex-col md:flex-row w-full min-h-screen justify-between items-center m-auto px-1 py-5">
      <div className="container basis-1/2 px-5 flex-row items-center hidden md:flex transition ease-in-out  hover:-translate-y-1 hover:scale-110" >
        <Zoom>
          <img src="/gdsc-logo.png" width="80%" />
        </Zoom>
      </div>
      <Fade right>
        <div className="container flex flex-col md:basis-1/2 basis-1 px-5 items-left">
          <p className=" text-3xl md:text-6xl font-medium text-black  text-left">
            What is <span className="font-semibold text-blue-500">GDSC ?</span>
          </p>
          <p className=" text-lg md:text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome.
            <br />
            <br />
            By joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and
            their community.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default BriefSection;
