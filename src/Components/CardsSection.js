import React from "react";
import Fade from "react-reveal/Fade";
import IconSubSection from "./IconSubSection";
import { HiUserGroup } from "react-icons/hi";
import { MdStream } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
const CardsSection = () => {
  return (
    <div className="w-full grid-bg">
      <div className="flex md:flex-row flex-col max-w-[95%] md:max-w-[80%] min-h-screen flex-wrap md:flex-nowrap justify-between items-center m-auto px-1 py-1">
        <div className="container basis-4/8 flex-col max-w-[100%] basis-1/2 px-5 py-5 items-left">
          <Fade left>
            <p className="text-3xl md:text-6xl font-medium text-black text-left">
              Here at   
              <span className="font-semibold text-blue-500"> GDSC </span><br/>
              we have
            </p>
          </Fade>
        </div>
        <Fade right>
          <div className="container basis-8/4 md:max-w-[90%] px-5 flex flex-col  md:flex-col items-center justify-evenly gap-5">
            <IconSubSection
              icon={HiUserGroup}
              heading="Engaging Community"
              bg="bg-[#FBBC05]"
              desc="We have an active community of student developers where we discuss,train and share our expertise."
            />
            <IconSubSection
              icon={MdStream}
              heading="Interactive Workshops"
              bg="bg-[#EA4335]"
              desc="We conduct interactive workshops and webinars on latest frameworks and technologies."
            />
            <IconSubSection
              icon={BiCodeAlt}
              heading="Exciting Dev Experience"
              bg="bg-[#34A853]"
              desc="We host coding challenges and learning modules to kickstart your developer journey."
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CardsSection;
