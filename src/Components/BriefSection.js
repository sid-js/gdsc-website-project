import React from "react";

const BriefSection = () => {
  return (
    <div className="flex flex-row min-h-[90vh] max-h-[90vh] max-w-[90%] justify-between items-center m-auto px-1 py-5">
      <div className="container basis-1/2 px-5 flex flex-row items-center">
      <img src="/gdsc-logo.png" width="80%"/>
      </div>
      <div className="container flex flex-col basis-1/2 px-5 items-left">
        <p className="text-6xl font-medium text-black  text-left">
          What is <span className="font-semibold text-blue-500">GDSC ?</span>
        </p>
        <p className="text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
          Google Developer Student Clubs are university based community groups
          for students interested in Google developer technologies. Students
          from all undergraduate or graduate programs with an interest in
          growing as a developer are welcome.<br/><br/>By joining a GDSC, students grow
          their knowledge in a peer-to-peer learning environment and build
          solutions for local businesses and their community.
        </p>
      </div>
    </div>
  );
};

export default BriefSection;
