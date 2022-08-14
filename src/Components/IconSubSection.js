import React from "react";

const IconSubSection = (props) => {
  return (
    <div className="flex max-w-[90%] md:max-w-[70%] flex-col md:flex-row justify-center items-center md:justify-start bg-white drop-shadow-md hover:drop-shadow-lg transition ease-in-out  hover:-translate-y-1 hover:scale-110 rounded-xl px-4 py-5 flex-no-wrap gap-2">

        <div className={`${props.bg} flex flex-row flex-none justify-center rounded-full items-center w-[80px] h-[80px]`}>
          {<props.icon size="2.3em" color="#FFFFFF" className="my-auto animate-pulse" />}
        
      </div>

      <div className="px-3 container md:text-left text-center">
        <h3 className="md:text-3xl text-xl font-normal ">{props.heading}</h3>
        <p className="py-2 md:text-xl text-sm font-light text-gray-500">{props.desc}</p>
      </div>
    </div>
  );
};

export default IconSubSection;
