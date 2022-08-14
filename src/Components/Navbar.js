import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaStream } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isNav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!isNav);
  };
  const links = [
    {
      key: 1,
      text: "Home",
      path: "/",
    },
    {
      key: 2,
      text: "Teams",
      path: "/teams",
    },
    {
      key: 3,
      text: "Community",
      path: "/community",
    },
    {
      key: 4,
      text: "Contact",
      path: "/",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 md:flex bg-white drop-shadow-md h-24 justify-between items-center align-middle py-5 md:px-5  w-full  text-lg text-gray-800">
      <div className="flex justify-between align-center items-center px-6 py-4">
        <img
          src="/gdsc-logo.svg"
          className="w-[280px] sm:w-[390px] md:w-[480px]"
          alt="GDSC"
        />
        <button
          onClick={handleNav}
          className="md:hidden"
        >
          {!isNav ? <FaStream className=""/> : <CgClose />}
        </button>
      </div>

      {isNav ? (
        <div className="py-4 bg-white px-6 md:flex justify-start items-center">
          <ul className=" md:flex justify-start items-center">
            {links.map((link) => (
              <li key={link.key} className="sm:px-3 md:px-5 py-2">
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <button className="rounded-lg bg-blue-500 px-4 py-1 text-white mx-1 ">
            Sign In
          </button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
