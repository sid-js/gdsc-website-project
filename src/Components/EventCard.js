import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  return (
    <div className="container rounded-lg bg-white drop-shadow-2xl flex flex-col max-w-screen-sm mx-5 transition ease-in-out  hover:-translate-y-1 hover:scale-110">
      <div className="container rounded-t-lg max-w-full overflow-hidden">
        <img
          src={props.imgsrc}
          className="overflow-hidden object-cover aspect-square"
        />
      </div>
      <div className="py-6 px-5">
        <a target="_blank" href={props.golink}>
          <div className="text-3xl py-1  font-semibold hover:text-blue-600">{props.text}</div>
        </a>
        <div className="text-xl py-1  font-normal">{props.subtext}</div>
      </div>
    </div>
  );
};

export default EventCard;
