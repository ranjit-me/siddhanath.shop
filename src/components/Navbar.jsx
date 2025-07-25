import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTruckFast,
  faCartShopping,
  faHouse,
  faTags,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 w-screen">
      <div className="flex items-center justify-between w-full px-4 py-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          </Link>
          <span
            className="text-lg md:text-2xl font-bold text-green-700 whitespace-nowrap cursor-pointer"
            onClick={() => {
              scrollToTop();
              setMenuOpen(false);
            }}
          >
            Sidhhanath Krushi Kendra
          </span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-3 md:gap-5 text-sm font-medium text-gray-700 items-center justify-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-40 md:z-auto mt-2 md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faTags} />
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/brands"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
              Brands
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/services"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faTruckFast} />
              Services
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Cart
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/siddhanath_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-600 transition px-4 py-2 md:p-0"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
