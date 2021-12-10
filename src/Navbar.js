import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* ------------- Header ------------------ */}
      <header className="absolute z-10 flex justify-between w-full px-20 pt-5 my-2">
        <div className="overflow-hidden mx-7">
          <img
            src="logo1.png"
            alt=""
            className="w-1/12 h-1/12 sm:absolute sm:left-8 sm:top-2 sm:w-8"
          />
        </div>

        <ul className="flex items-center mx-3 font-medium list-none sm:hidden">
          <NavLink to="/home" activeClassName="active">
            <li className="mx-5 text-lg tracking-wide">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="mx-5 text-lg tracking-wide">About</li>
          </NavLink>
          <NavLink to="/services">
            <li className="mx-5 text-lg tracking-wide">Services</li>
          </NavLink>
          <NavLink to="/videos">
            <li className="mx-5 text-lg tracking-wide">Videos</li>
          </NavLink>
        </ul>
      </header>

      {/*------------- Hemburger Menu ----------------*/}

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10 w-10 h-10 text-gray-100 sm:visible md:hidden lg:hidden 2xl:hidden right-6 top-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(true)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        {open && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-40 w-10 h-10 sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden right-6 top-5 text-red-50 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(false)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <ul className="absolute z-30 flex flex-col w-full h-screen font-medium list-none bg-black justify-evenly menu-animation">
              <NavLink
                onClick={() => setOpen(false)}
                to="/home"
                activeClassName="active"
              >
                <li className="text-lg tracking-wide ">Home</li>
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about">
                <li className="text-lg tracking-wide">About</li>
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services">
                <li className="text-lg tracking-wide ">Services</li>
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/videos">
                <li className="text-lg tracking-wide ">Videos</li>
              </NavLink>
            </ul>
          </>
        )}
      </div>
      {/* ------------- Content  ------------------ */}
    </>
  );
};

export default Navbar;
