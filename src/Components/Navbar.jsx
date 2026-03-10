import React, { useState } from "react";
import gameLogo from "../assets/vector-graphic-controller-gamepad-video-games-22.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-bold text-xl underline"
            : "hover:text-blue-300 text-xl"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/game"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-bold text-xl underline"
            : "hover:text-blue-300 text-xl"
        }
      >
        All Games
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-bold text-xl underline"
            : "hover:text-blue-300 text-xl"
        }
      >
        About
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-900 text-white shadow-xl">

      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-14 w-14 md:h-16 md:w-16" src={gameLogo} alt="" />
          <NavLink className="text-2xl md:text-3xl font-bold" to="/">
            Game<span className="text-blue-400">Hub</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks}

          <NavLink
            to="/login"
            className="btn btn-primary rounded-xl border-0 font-bold"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-warning rounded-xl border-0 font-bold"
          >
            Register
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-between gap-5 px-6 pb-6 pt-2 bg-gray-800">

          <div className="flex flex-col gap-5">
            {navLinks}
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <NavLink
            to="/login"
            className="btn btn-primary w-25 rounded-xl border-0 font-bold"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-warning w-25 rounded-xl border-0 font-bold"
          >
            Register
          </NavLink>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;