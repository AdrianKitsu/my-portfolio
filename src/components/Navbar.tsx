import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed right-[0] z-50">
      <div className="flex justify-end px-6 py-4">
        <button
          onClick={handleClick}
          className="relative flex flex-col justify-center items-center w-10 h-10 group z-10"
        >
          <span
            className={`bg-[#fcfcfc] h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
          <span
            className={`bg-[#fcfcfc] h-0.5 w-6 my-0.5 rounded-sm transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`bg-[#fcfcfc] h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[#312f30] text-[#fcfcfc] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[32px] font-caslon transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100 underline decoration-[#3b9ff0]"
                      : "opacity-65 hover:opacity-100"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
