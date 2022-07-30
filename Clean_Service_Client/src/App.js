import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { publicRoute } from "./routes/publicRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import { Toaster } from "react-hot-toast";
import { privateRoute } from "./routes/privateRoute";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import AddServices from "./Pages/Dashboard/AddServices";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Navbar>
        <Routes>
          {publicRoute.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route element={<RequireAuth />}>
            {privateRoute.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin />} />
              <Route path="add-services" element={<AddServices />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}
export default App;
