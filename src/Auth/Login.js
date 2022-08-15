import React, { useContext, useEffect } from "react";
import GoogleButton from "react-google-button";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { UserAuth } from "./AuthContext";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, user } = UserAuth();
  const handlesignIn = async () => {
    const res = await signIn();
    navigate("/community");
  };

  return (
    <div>
      <div className="container flex flex-col md:flex-row w-full min-h-screen justify-start md:justify-between items-center m-auto px-1 py-5">
        <div className="container basis-1/2 px-5 flex-row items-center md:flex transition ease-in-out  hover:-translate-y-1 hover:scale-110">
          <Zoom>
            <img src="/login.svg" width="80%" />
          </Zoom>
        </div>
        <Fade right>
          <div className="container flex flex-col md:basis-1/2 basis-1 px-5 items-left flex-none">
            <p className=" text-3xl md:text-6xl font-medium text-black  text-left">
              Sign in to join
              <span className="font-semibold text-blue-500">
                {" "}
                our community
              </span>
            </p>
            <p className=" text-lg md:text-2xl font-normal text-left py-10 text-gray-600 max-w-[90%]">
              Sign-in to access community and publish your stories in our
              community tab.
            </p>
            <GoogleButton onClick={handlesignIn} />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Login;
