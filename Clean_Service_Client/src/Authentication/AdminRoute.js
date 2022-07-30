import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";

export default function AdminRoute() {
  const [admin] = useAdmin();
  let location = useLocation();
  if (!admin) {
    return <Navigate to="/"  replace />;
  }

  return <Outlet />;
}
