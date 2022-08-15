import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaStream } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { UserAuth } from "../Auth/AuthContext";

const Navbar = () => {
  const { user,logOut } = UserAuth();
  const handleSignOut = () => {
    logOut();
  }
  const navigate = useNavigate();
  const [isNav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!isNav);
  };
  const { pathname } = useLocation();
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
  ];

  return (
    <nav className="sticky top-0 z-50 md:flex bg-white drop-shadow-md h-24 justify-between items-center align-middle py-3 md:px-5  w-full  text-lg">
      <div className="flex justify-between align-center items-center px-6 py-4">
        <img
          src="/gdsc-mvj-logo.svg"
          className="w-[180px] sm:w-[200px] md:w-[280px]"
          alt="GDSC"
        />
        <button onClick={handleNav} className="md:hidden">
          {!isNav ? <FaStream className="" /> : <CgClose />}
        </button>
      </div>
      <div
        className={`py-4 bg-white px-6 flex-col md:flex md:flex-row justify-start items-start md:items-center ${
          isNav ? "flex" : "hidden"
        } `}
      >
        <ul className=" md:flex justify-start items-center no-underline text-gray-800">
          {links.map((link) => (
            <li
              key={link.key}
              className={`sm:px-3 md:px-5 py-2 ${
                pathname === link.path
                  ? "text-blue-500 border-blue-500 border-b"
                  : "text-gray-800"
              }`}
            >
              <Link  to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
        {user ? (
          <div className="md:flex md:flex-row items-center justify-center flex-none px-5">
            <button onClick={handleSignOut}>Sign Out</button>
            <div className="rounded-full overflow-hidden h-full px-3">
              <img src={user.photoURL} alt="avatar" width="40" height="40" className="rounded-full" />
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/auth/login");
            }}
            className="rounded-lg bg-blue-500 px-4 py-1 text-white mx-1 "
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
