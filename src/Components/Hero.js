import React from "react";
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const heros = [
    "Google Developer Student Clubs",
    "Empowering student pioneers",
    "Building a developer community",
    "Inspiring student developers",
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row px-4 mx-1 w-full min-h-screen grid-bg justify-center items-center">
      <div
        id="main"
        className="md:container min-h-full w-fit flex flex-col  px-1 md:px-12 py-4 text-sans items-center md:items-start basis-8/12 justify-center"
      >
        <p className="text-3xl md:text-6xl font-medium text-black text-center md:text-left">We are<br className="sm:hidden"/></p>
        <p className="text-3xl md:text-6xl font-medium text-black text-center md:text-left">
          
          <TypeAnimation
            sequence={[
              " empowering student pioneers",
              3000,
              "  a developer community",
              3000,
              " inspiring student developers",
              3000,
              " Google Developer Student Clubs",
              4500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={2}
            speed={80}
            className="text-blue-500 font-semibold"
          />
        </p>
        <p className="md:text-3xl text-md font-normal text-center py-10 text-gray-600 md:text-left">
          Join a community of student developers and grow your knowledge and
          skills in development and solve new challenges.
        </p>
      </div>
      <div
        id="right"
        className=" sm:h-fit px-6 py-5 text-sans basis-4/12"
      >
        <Fade right>
          <img src="/hero-bg.svg" className="sm:w-full w-[220px]" />
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
