import React from "react";
import { TypeAnimation } from "react-type-animation";
import { HiUserGroup } from "react-icons/hi";
const CommunityHero = () => {
  return (
    <div className="bg-blue-500 h-60 w-full flex flex-col justify-center items-center">
      <div className="text-2xl flex flex-row items-center justify-center gap-x-4 md:text-5xl font-semibold text-white"><HiUserGroup/>Our Community</div>
      <p className="text-white text-xs md:text-lg pt-3 text-center">
        Take part in our awesome community and discuss everything about
        Development
      </p>
    </div>
  );
};

export default CommunityHero;
