import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

function RequireAuth() {
  let auth = false;
  let location = useLocation();
  if (!auth) {
    toast.error("You Have To Login First!", {
      id: "clipboard",
      icon: "🔓",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
