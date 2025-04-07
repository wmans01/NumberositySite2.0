/**
 * NavHeader Component
 *
 * A responsive navigation header component that displays differently on mobile and desktop.
 * On desktop, it shows a horizontal navigation bar with all menu items.
 * On mobile, it shows a hamburger menu that expands to reveal a vertical menu.
 * The component supports two modes: home (transparent background) and normal (blue background).
 *
 * Props:
 * - home: boolean - Determines if the header is on the home page (affects background)
 */

import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavHeader = ({ home }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={
        (!home ? "bg-blue-950 " : "bg-transparent ") +
        "flex justify-between m-0 p-0 relative"
      }
    >
      {/* Logo link */}
      <Link to="/" className="flex p-0 pl-4">
        <img
          border="0"
          alt="Numberosity Logo"
          src="/src/assets/NumberosityLogo.svg"
          width={50}
          height={50}
        />
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop menu - hidden on mobile */}
      <ul className="hidden md:flex navBar">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/teams">Teams</CustomLink>
        <CustomLink to="/learning">Learning</CustomLink>
        <CustomLink to="/outreach">Outreach</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/resources">Resources</CustomLink>
        <CustomLink to="/join">Join</CustomLink>
        <CustomLink to="/donate">Donations</CustomLink>
      </ul>

      {/* Mobile menu - hidden on desktop */}
      <div
        className={`md:hidden absolute top-full right-0 w-32 bg-black/40 backdrop-blur-sm transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] rounded-lg py-2 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/teams">Teams</CustomLink>
          <CustomLink to="/learning">Learning</CustomLink>
          <CustomLink to="/outreach">Outreach</CustomLink>
          <CustomLink to="/news">News</CustomLink>
          <CustomLink to="/resources">Resources</CustomLink>
          <CustomLink to="/join">Join</CustomLink>
          <CustomLink to="/donate">Donations</CustomLink>
        </ul>
      </div>
    </nav>
  );
};

/**
 * CustomLink Component
 *
 * A wrapper component for navigation links that adds active state styling.
 *
 * Props:
 * - to: string - The path to navigate to
 * - children: ReactNode - The content to display in the link
 */
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive =
    useMatch({ path: resolvedPath.pathname, end: true }) ||
    (to === "/about" &&
      (useMatch({ path: "/about/*" }) || useMatch({ path: "/about" })));
  return (
    <Link to={to} {...props}>
      <li className={isActive ? "navItem active " : "navItem text-white"}>
        {children}
      </li>
    </Link>
  );
}

export default NavHeader;
