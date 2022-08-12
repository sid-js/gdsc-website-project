import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heros = [
    "Google Developer Student Clubs",
    "Empowering student pioneers",
    "Building a developer community",
    "Inspiring student developers",
  ];

  return (
    <div className="flex flex-row max-w-full min-h-[700px] max-h-[750] grid-bg">
      <div
        id="main"
        className="container min-h-full flex flex-col  px-12 py-20 text-sans items-start basis-8/12 justify-center"
      >
        <p className="text-6xl font-medium text-black  text-left">
          We are
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
        <p className="text-3xl font-normal text-left py-10 text-gray-600">
            Join a community of student developers and grow your knowledge and skills in development and solve new challenges.
        </p>
      </div>
      <div
        id="right"
        className="container min-h-full flex px-6 py-5 text-sans basis-4/12">
        <img src="/hero-bg.svg" width="100%"/>
      </div>
    </div>
  );
};

export default Hero;
