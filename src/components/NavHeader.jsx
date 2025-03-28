import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavHeader = ({ home }) => {
  return (
    <nav
      className={
        (!home ? "bg-blue-950 " : "bg-transparent ") +
        "flex justify-between m-0 p-0"
      }
    >
      <Link to="/" className="flex p-0 pl-4">
        <img
          border="0"
          alt="Numberosity Logo"
          src="/src/assets/NumberosityLogo.svg"
          width={50}
          height={50}
        />
      </Link>
      <ul className="navBar">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/teams">Teams</CustomLink>
        <CustomLink to="/learning">Learning Program</CustomLink>
        <CustomLink to="/outreach">Outreach</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/resources">Resources</CustomLink>
        <CustomLink to="/join">Join</CustomLink>
        <CustomLink to="/donate">Donations</CustomLink>
      </ul>
    </nav>
  );
};

export default NavHeader;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <li className={isActive ? "navItem active " : "navItem text-white"}>
        {children}
      </li>
    </Link>
  );
}
