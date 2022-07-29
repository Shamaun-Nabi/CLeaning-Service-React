import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <>
      <div className="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col  ">
          {/* Navbar */}
          <div className="w-full navbar bg-base-200">
            <div className="flex-1 px-2 mx-2">CleanHome.com</div>
            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal mx-4">
                {/* Navbar menu content here */}
                <li>
                  <NavLink className="mx-3" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mx-3" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mx-3" to="/services">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mx-3" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mx-3" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className=" dropdown dropdown-hover dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost  btn-outline rounded-lg"
                  >
                    BookNow
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-2"
                  >
                    <li>
                      <a href="/">Item 1</a>
                    </li>
                    <li>
                      <a href="/">Item 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay" />
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* Sidebar content here */}
            <li>
              <NavLink className="my-3" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="my-3" to="/login">
                Login
              </NavLink>
            </li>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex="0"
                className="btn m-1 badge-outline hover:text-white"
              >
                Book Now
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow  rounded-box w-52"
              >
                <li>
                  <a href="/">Item 1</a>
                </li>
                <li>
                  <a href="/">Item 2</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
