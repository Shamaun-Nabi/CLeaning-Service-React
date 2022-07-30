import React from "react";
import { Outlet } from "react-router-dom";
import DasboardSidebar from "./DasboardSidebar";

export default function Dashboard() {
  return (
    <>
      <DasboardSidebar>
        <Outlet />
      </DasboardSidebar>
    </>
  );
}
