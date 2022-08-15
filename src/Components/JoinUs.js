import React from 'react'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useNavigate } from 'react-router-dom';


const JoinUs = () => {
    const navigate = useNavigate();
  return (
    <div className="container flex flex-col md:flex-row w-full min-h-screen justify-between items-center m-auto px-1 py-5">
      <div className="container basis-1/2 px-5 flex-row items-center hidden md:flex transition ease-in-out  hover:-translate-y-1 hover:scale-110" >
        <Zoom>
          <img src="/join-us.svg" width="80%" />
        </Zoom>
      </div>
      <Fade right>
        <div className="container flex flex-col md:basis-1/2 basis-1 px-5 items-left flex-none">
          <p className=" text-3xl md:text-6xl font-medium text-black  text-left">
            Become a Member of <span className="font-semibold text-blue-500">GDSC MVJCE</span>
          </p>
          <p className=" text-lg md:text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
            <span className='font-semibold'>GDSC MVJCE is now open to new members.</span>
            <br/>
            <br/>
            Join GDSC and grow your knowledge in a peer-to-peer
            learning environment and render solutions to real-world problems.
          </p>
          <button onClick={()=>{
            navigate("/teams");
          }}className="rounded-lg bg-blue-500 px-4 py-3 text-white mx-1 w-[40%] transition ease-in-out hover:bg-blue-400 hover:-translate-y-1 hover:scale-110">
            Explore our Teams
          </button>
        </div>
      </Fade>
      </div>
  )
}

export default JoinUs