import { Outlet, NavLink } from "@remix-run/react";
import React from "react";
import Layout from "./_layout";

function Header() {
  return (
    <>
      <header className="flex justify-between mb-10">
        <nav className="flex">
          <ul className="list-none flex gap-4">
            <li>
              <NavLink to="/" end>
                Workativ Assitant
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="flex">
          <ul className="list-none flex gap-4">
            <li>
              <NavLink to="/why-workativ" end>
                Why Workativ
              </NavLink>
            </li>
            <li>
              <NavLink to="/company">Chatbot Integration</NavLink>
            </li>
            <li>
              <NavLink to="/company">Market Place</NavLink>
            </li>
            <li>
              <NavLink to="/company">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/company">Learn</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
