import React from 'react'
import EventCard from './EventCard';
const Eventssection = () => {
  return (
    <div className="flex flex-col min-h-[90vh] max-h-[90vh] max-w-[90%] justify-evenly items-center m-auto px-1 py-1 ">
      <div className="container flex flex-col basis-1/2 px-5 items-left">
        <p className="text-6xl font-medium text-black  text-left">
          Take a look at past <span className="font-semibold text-blue-500">our events</span>
        </p>
      </div>
      <div className="container px-5 flex flex-row items-center justify-evenly">
      <EventCard imgsrc="/event1.png" text="Career Roadmap to be a Data Analyst" subtext="28th May (Data Science)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-machine-learning-kaggle-day-3/"/>
      <EventCard imgsrc="/event3.png" text="Basics of Firebase - Building Portfolio" subtext="30th May (Web Development)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-web-development-day-5-firebase-and-portfolio-website/"/>
      <EventCard imgsrc="/event2.png" text="Getting Started with Flutter Online Webinar" subtext="21 March (Android Development)" golink="https://gdsc.community.dev/events/details/developer-student-clubs-mvj-college-of-engineering-bengaluru-presents-getting-started-with-flutter/"/>
      
      </div>
      
    </div>
  )
}

export default Eventssection