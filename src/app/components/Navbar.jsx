"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Resume",
    path: "https://drive.google.com/file/d/1gTXzhT9aWAJWBtSOgh8GzxqxIb1D7QDD/view?usp=sharing",
  },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (path) => {
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(path, "_blank");
    }
  };

  return (
    <nav className={`fixed mx-auto border ${theme === "dark" ? "border-[#33353F]" : "border-gray-200"} top-0 left-0 right-0 z-10 ${theme === "dark" ? "bg-[#121212]" : "bg-white"} bg-opacity-100`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image src="/1.jpeg" alt="Logo" width={40} height={40} />
          <span className={`text-2xl md:text-5xl ${theme === "dark" ? "text-white" : "text-black"} font-semibold`}>
            Kampalli
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${theme === "dark" ? "border-slate-200 text-slate-200 hover:text-white hover:border-white" : "border-gray-800 text-gray-800 hover:text-black hover:border-black"}`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${theme === "dark" ? "border-slate-200 text-slate-200 hover:text-white hover:border-white" : "border-gray-800 text-gray-800 hover:text-black hover:border-black"}`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.path)}
                  className={`px-4 py-2 bg-transparent border border-transparent hover:border-slate-200 hover:bg-slate-800 rounded-md ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  {link.title}
                </button>
              </li>
            ))}
            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-800" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} theme={theme} /> : null}
    </nav>
  );
};

export default Navbar;