import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      key: 1,
      text: "Home",
      path: "/",
    },
    {
        key: 2,
        text: "About Us",
        path: "/about",
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
    <div className="bg-white drop-shadow-md">
        <nav className="flex space-between m-auto px-4 py-8 justify-between max-w-[90%] items-center">
      <div id="logo" className="">
        <img src="/gdsc-logo.svg" className="" width="450px" />
      </div>
      <div id="links" className="flex text-sans font-medium text-lg items-center">
        <ul className="flex justify-start align-center content-center">
          {links.map((link) => 
            <li key={link.key} className="px-5">
              <Link to={link.path}>{link.text}</Link>
            </li>
            )}
        </ul>
        <button className="rounded-lg bg-blue-500 px-5 py-2 text-white mx-1">Sign In</button>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;
