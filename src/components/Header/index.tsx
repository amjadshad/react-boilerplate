import React from "react";
import classnames from "classnames";

import "./Header.scss";

const NavItems: React.FC = () => (
  <div className="Header-navItems">
    <ul>
      <li>homeowners</li>
      <li>roofers</li>
      <li>login</li>
    </ul>
  </div>
);

export const Header: React.FC = () => {
  return (
    <>
      <div className="Header">
        <div>
          <span>Eventops Logo</span>
        </div>
      </div>
    </>
  );
};
