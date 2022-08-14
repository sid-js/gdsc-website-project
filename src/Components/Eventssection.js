import React from 'react'
import EventCard from './EventCard';
import Fade from "react-reveal/Fade"
const Eventssection = () => {
  return (
    <div className="container flex flex-col w-full min-h-screen flex-wrap justify-evenly items-center m-auto px-1 py-1 md:">
      <div className="container flex-col max-w-[90%] basis-1/2 px-5 py-5 items-left">
        <p className="text-3xl md:text-6xl font-medium text-black  text-left">
          Our
          <span className="font-semibold text-blue-500"> past events</span>
        </p>
      </div>
      <Fade left>
      <div className="container max-w-[90%] px-5 flex flex-col  md:flex-row items-center justify-evenly gap-5">
      <EventCard imgsrc="/event1.png" text="Career Roadmap to be a Data Analyst" subtext="28th May (Data Science)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-machine-learning-kaggle-day-3/"/>
      <EventCard imgsrc="/event3.png" text="Basics of Firebase - Building Portfolio" subtext="30th May (Web Development)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-web-development-day-5-firebase-and-portfolio-website/"/>
      <EventCard imgsrc="/event2.png" text="Getting Started with Flutter Online Webinar" subtext="21 March (Android Development)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-getting-started-with-flutter/"/>
      
      </div>
      </Fade>
      
      
    </div>
  )
}

export default Eventssection