import { useState } from "react";
import Heading from "./Heading";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 3,
      title: "Connect",
      url: "/connect",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-primaryBlue fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4">
        {/* LOGO */}
        <Heading as="h1" size="xl" className="flex items-center drop-shadow-md text-tealishGreen">
          <span> Joshua Akodu A.</span>
        </Heading>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Icon
            icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
            width="36"
            height="36"
            className="text-tealishGreen"
          />
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center space-x-4 lg:space-x-6 items-center">
          {links.map((link) => (
            <li key={link.id} className="flex items-center gap-1.5">
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to={link.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg hover:underline hover:underline-offset-6 text-tealishGreen font-extrabold"
                    : "text-lg hover:underline hover:underline-offset-6"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className={`absolute top-[70px] left-0 w-full h-[calc(100vh-70px)] z-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`absolute w-full z-[99] text-white transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul
          className="flex flex-col py-2 px-4 space-y-2 shadow"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 py-3 px-2 rounded-md w-full text-secondaryBlue font-extrabold"
                    : "flex items-center gap-3 py-3 px-2 rounded-md w-full"
                }
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, 0);
                }}
              >
                <span className="text-lg">{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
