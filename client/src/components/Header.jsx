import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { authUser, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 transition-transform ${
          menuOpen ? "block" : "hidden md:flex"
        } md:gap-4 items-center flex flex-col md:flex-row`}
      >
        <Link to="/about" className="text-xl px-4">
          About
        </Link>
        <Link to="/contact" className="text-xl px-4">
          Contact
        </Link>

        {/* ✅ Show GetContact link ONLY if the user is an admin */}
        {authUser?.role === "admin" && (
          <Link to="/getContacts" className="text-xl px-4">
            User Messages
          </Link>
        )}

        {authUser ? (
          <>
            <span className="text-lg font-semibold">
              Welcome, {authUser.name ? authUser.name : "User"}
            </span>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="text-xl px-4">
              Register
            </Link>
            <Link to="/login" className="text-xl px-4">
              Login
            </Link>
          </>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl px-4 mt-2 md:mt-0"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
