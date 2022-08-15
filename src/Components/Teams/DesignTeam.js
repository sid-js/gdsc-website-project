import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const DesignTeam = () => {
  return (
    <div className="container flex flex-col md:flex-row-reverse w-full h-5/6 justify-between items-center m-auto px-1 py-10">
      <div className="container basis-1/2 px-5 flex-row items-center md:flex transition ease-in-out  hover:-translate-y-1 hover:scale-110" >
        <Zoom>
          <img src="/design-team.svg" width="80%" />
        </Zoom>
      </div>
      <Fade left>
        <div className="container flex flex-col md:basis-1/2 basis-1 px-5 items-left flex-none">
          <p className=" text-3xl md:text-6xl font-medium text-black  text-left">
            <span className="font-semibold text-yellow-400">Design Team</span>
          </p>
          <p className=" text-lg md:text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
            GDSC's Design Team is reponsible for using their graphic design skillset in  designing event posters and content for social media.
          </p>
        </div>
      </Fade>
      </div>
  )
}

export default DesignTeam