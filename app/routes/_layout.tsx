import { Outlet, NavLink } from "@remix-run/react";
import React from "react";

function Layout() {
  return (
    <>
      <header className="flex justify-between mb-10">
        <nav className="flex">
          <ul className="list-none flex gap-4">
            <li>
              <NavLink to="/" end>
                Workativ
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">Products</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="flex">
          <ul className="list-none flex gap-4">
            <li>
              <NavLink to="/why-workativ" end>
                Book Demo
              </NavLink>
            </li>
            <li>
              <NavLink to="/company">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
