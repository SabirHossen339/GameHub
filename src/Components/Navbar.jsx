import React, { useState } from "react";
import gameLogo from "../assets/vector-graphic-controller-gamepad-video-games-22.png";
import { NavLink } from "react-router";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold relative after:w-full"
      : "hover:text-blue-300 relative after:w-0 hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/70 border-b border-white/10 shadow-xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 md:h-14 md:w-14" src={gameLogo} alt="" />
          <NavLink to="/" className="text-2xl md:text-3xl font-bold">
            Game<span className="text-blue-400">Hub</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-5 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navStyle({ isActive })} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/game"
            className={({ isActive }) =>
              `${navStyle({ isActive })} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300`
            }
          >
            All Games
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navStyle({ isActive })} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300`
            }
          >
            About
          </NavLink>

          {/* Auth Buttons */}
          <NavLink
            to="/login"
            className="btn btn-primary rounded-xl border-0 font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-warning rounded-xl border-0 font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Register
          </NavLink>

          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            U
          </div>

        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 pb-6 pt-4 bg-gray-900/95 backdrop-blur-lg text-lg">

          <NavLink to="/" className="hover:text-blue-400">
            Home
          </NavLink>

          <NavLink to="/game" className="hover:text-blue-400">
            All Games
          </NavLink>

          <NavLink to="/about" className="hover:text-blue-400">
            About
          </NavLink>

          <NavLink
            to="/login"
            className="btn btn-primary rounded-xl border-0 w-full"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-warning rounded-xl border-0 w-full"
          >
            Register
          </NavLink>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;