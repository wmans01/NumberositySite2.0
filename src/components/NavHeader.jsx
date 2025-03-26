import React from "react";

const NavHeader = () => {
  return (
    <nav className="bg-gray-800 flex justify-between m-0 p-0">
      <a href="/" className="flex pl-4">
        <img
          border="0"
          alt="Numberosity Logo"
          src="/src/assets/NumberosityLogo.svg"
          width={50}
          height={50}
        />
      </a>
      <ul className="navBar">
        <li>
          <a className="navItem" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="navItem" href="/teams">
            Teams
          </a>
        </li>
        <li>
          <a className="navItem" href="/learning">
            Learning Program
          </a>
        </li>
        <li>
          <a className="navItem" href="/outreach">
            Outreach
          </a>
        </li>
        <li>
          <a className="navItem" href="/news">
            News
          </a>
        </li>
        <li>
          <a className="navItem" href="/resources">
            Resources
          </a>
        </li>
        <li>
          <a className="navItem" href="/join">
            Join
          </a>
        </li>
        <li>
          <a className="navItem" href="/donate">
            Donations
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
