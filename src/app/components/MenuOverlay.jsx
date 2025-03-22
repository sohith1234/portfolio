import React from "react";
import NavLink from "./NavLink";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, theme, toggleTheme }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} theme={theme} />
        </li>
      ))}
      {/* Theme Toggle Button in Mobile Menu */}
      <li className="mt-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </li>
    </ul>
  );
};

export default MenuOverlay;