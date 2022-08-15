import React from 'react'
import { TypeAnimation } from "react-type-animation";

const TeamHero = () => {
  return (
    <div className="bg-blue-500 h-60 w-full flex flex-col justify-center items-center">
        <TypeAnimation
            sequence={[
              "Teamwork makes dreamwork.",
            ]}
            wrapper="span"
            speed={80}
            cursor={false}
            className="text-2xl md:text-5xl font-semibold text-white"
          />
        <p className="text-white text-xs md:text-lg pt-3 text-center">GDSC comprises of teams handling different fields and technoligies. Take a look at our teams below</p>
    </div>
  )
}

export default TeamHero