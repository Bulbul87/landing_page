import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 ">
        <h1 className="text-2xl font-bold text-teal-400">AVILON</h1>

        <button
          className="md:hidden text-teal-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-6 absolute md:static top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <li>
            <a
              href="#hero"
              className="block md:inline-block py-2 px-10 hover:text-teal-600 font-semibold text-teal-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block md:inline-block py-2 px-4 hover:text-teal-600 font-semibold text-teal-400"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block md:inline-block py-2 px-4 hover:text-teal-600 font-semibold text-teal-400"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="block md:inline-block py-2 px-4 hover:text-teal-600 font-semibold text-teal-400"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block md:inline-block py-2 px-4 hover:text-teal-600 font-semibold text-teal-400"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
