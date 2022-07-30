import React from "react";
import { NavLink } from "react-router-dom";

export default function DasboardSidebar({ children }) {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-slate-300">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay" />
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
            {/* Sidebar content here */}
            <h3 className="text-center text-lg font-bold">Dashboard</h3>
            <div className="divider"></div>
            <li>
              <NavLink className="my-2" to="/dashboard/add-admin">
                Add Admin
              </NavLink>
            </li>
            <li>
              <NavLink className="my-2" to="/dashboard/add-services">
                Add Services
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
